<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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

    public function changeAdmin(int $id): void
    {
        $user = auth()->user();

        if(isset($user) && $user->isSuperAdmin) {
            $user = User::find($id);

            $user->isAdmin = (int) $user->isAdmin ? !$user->isAdmin : !$user->isAdmin;

            $user->save();
        }
    }
}
