<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UsersRequest;
use App\Models\User;

class UsersController extends Controller
{
    public function showAllUsers(): array
    {
        $users = User::all();

        return $users->toArray();
    }

    public function showUser(int $id): array
    {
        $user = User::find($id);

        return $user->toArray();
    }

    public function showAllAdmins(): array
    {
        $admins = User::where('isAdmin', 1);

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
