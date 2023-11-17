<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegistredUser2faController extends Controller
{
    public function check2faToken(Request $request)
    {
        $id = \auth()->id();

        $user = User::find($id);

        $request->validate([
            'token' => 'required|string|max:6'
        ]);

        $token = $request->token;

        if($user->fa2_token == $token) {

            event(new Registered($user));

            Auth::login($user);

            return redirect(RouteServiceProvider::HOME);

        }
    }
}
