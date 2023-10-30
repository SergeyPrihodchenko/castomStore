<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MainPageRequest;
use App\Models\AdminMainPage\MainPage;
use Illuminate\Http\Request;

class MainUpdateController extends Controller
{
    public function mainUpdate(MainPageRequest $request): void
    {

        $requastData = $request->validated();

        $mainUpdate = new MainPage();

        foreach ($requastData as $key => $value) {
            if(isset($value) && $key != 'image') {
                $mainUpdate->addAttribute($key, $value);
            } elseif(isset($value) && $key == 'image') {
                $mainUpdate->image($value);
            }
        }

        $mainUpdate->save();
    }
}
