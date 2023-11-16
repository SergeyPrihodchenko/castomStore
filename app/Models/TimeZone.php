<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeZone extends Model
{
    use HasFactory;

    static function GetIP(): string
    {
        $clien_ip = $_SERVER['REMOTE_ADDR'];

        return $clien_ip;
    }

    public function getTimeZoneFromIP(): string
    {
        $ip = static::GetIP();

        $url = "https://api.ipapi.com/{$ip}?access_key=YOUR_ACCESS_KEY";

        $response = file_get_contents($url);

        $data = json_decode($response, true);

        $timeZone = $data['timezone'];

        return $timeZone;
    }
}
