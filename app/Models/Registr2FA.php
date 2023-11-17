<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registr2FA extends Model
{
    use HasFactory;

    static function generateToken(): int
    {
        $token = \rand(100000, 999999);
        return $token;
    }
}
