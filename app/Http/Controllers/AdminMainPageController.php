<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminMainPageRequest;
use App\Models\Admin\MainPage\MainPage;

class AdminMainPageController extends Controller
{
    protected const ROW_ID = 1;

    public function setAttributes(AdminMainPageRequest $request)
    {
        $data = $request->validated();

        $mainPage = new MainPage();

        $mainPage->addAttributes($data);
    }
}
