<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UsersRequest;
use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function showAllUsers()
    {
        $isSuper = \auth()->user()->isSuperAdmin;

        $users = User::all(['id', 'name', 'email'])->where('isAdmin', 0)->where('isSuperAdmin', 0);

        return Inertia::render('AdminPage/UsersPage/UsersPage', ['users' => $users, 'isSuper' => $isSuper]);
    }

    public function showUser(int $id): array
    {
        $user = User::find($id);

        return $user->toArray();
    }

    public function sortUsersByEmail(UsersRequest $request): array
    {
        $value = $request->input('value');

        $users = User::where('email', 'LIKE', "%$value%")->get(['id', 'name', 'email']);

        return $users->toArray();
    }

    public function admins(): array
    {
        $admins = User::where('isAdmin', 1)->get();

        return $admins->toArray();
    }

    public function changeAdmin(UsersRequest $request): void
    {
        $data = $request->validated();
        
        $id = $data['user_id'];

        $user = auth()->user();

        if(isset($user) && $user->isSuperAdmin) {
            $user = User::find($id);

            $user->isAdmin = (int) $user->isAdmin ? !$user->isAdmin : !$user->isAdmin;

            $user->save();
        }
    }
}
