<?php

namespace App\Http\Controllers;

use App\Models\Admin\MainPage\MainPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainPageController extends Controller
{
    private $mainPage;

    protected const ROW_ID = 1;

    function __construct(MainPage $mainPage)
    {
        $this->mainPage = $mainPage;    
    }

    function index()
    {
        $mainPage = $this->mainPage::find(self::ROW_ID);

        $data['current_settings'] = [
          'title' => $mainPage->title->title, 
          'header' => $mainPage->header->title,
          'subheader' => $mainPage->subheader->title,
          'img_path' => $mainPage->imagePath->img_path,
          'img_title' => $mainPage->imagePath->title
        ];

        return Inertia::render('HomePage/HomePage', ['data' => $data]);
    }
}
