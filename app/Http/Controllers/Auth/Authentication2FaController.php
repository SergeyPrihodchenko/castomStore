<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Authentication2FaController extends Controller
{
    public function checkCode($id, Request $request) 
    {
        $user = User::find($id);

        $newDate = Carbon::now()->toDateTimeString();

        if($user->time_live_code > $newDate) {
            
            if($user->code == $request->code) {

                $user->email_verified_at = Carbon::now('Europe/Moscow')->toDateTimeString();
    
                $user->save();
    
                event(new Registered($user));
    
                Auth::login($user);
    
                return redirect()->route('main');

            } else {

                return redirect()->route('register');

            }
        } else {

            $user->delete();

            return redirect()->route('register');

        }
    }
}
