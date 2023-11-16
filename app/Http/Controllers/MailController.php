<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendMail()
    {
        // Mail::to('S.prihodchenko@yandex.ru')->send(new OrderShipped());
    }
}
