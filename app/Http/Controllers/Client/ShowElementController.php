<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowElementController extends Controller
{
    function index()
    {
        return Inertia::render('ShowPage/ShowPage');
    }
}
