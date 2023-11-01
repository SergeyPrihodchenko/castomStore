<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminMainPageRequest;
use App\Models\Admin\MainPage\Header;
use App\Models\Admin\MainPage\Image;
use App\Models\Admin\MainPage\MainPage;
use App\Models\Admin\MainPage\Subheader;
use App\Models\Admin\MainPage\Title;

class AdminMainPageController extends Controller
{
    protected const ROW_ID = 1;

    public function index() 
    {
        $data = [];

        $mainPage = MainPage::find($this::ROW_ID);

        $data[] = ['title' => $mainPage->title->title];
        $data[] = ['header' => $mainPage->header->header];
        $data[] = ['title' => $mainPage->subheader->subheader];
        $data[] = ['img_path' => $mainPage->imagePath->img_path];

        $data[] = ['all_title' => Title::all()->toArray()];
        $data[] = ['all_header' => Header::all()->toArray()];
        $data[] = ['all_subheader' => Subheader::all()->toArray()];
        $data[] = ['all_img_path' => Image::all()->toArray()];

        return response()->json($data);
    }

    public function setAttributes(AdminMainPageRequest $request)
    {
        $data = $request->validated();

        $mainPage = new MainPage();

        $mainPage->addAttributes($data);
    }

    public function updateTitle($id)
    {
        $mainPage = MainPage::find($this::ROW_ID);

        $mainPage->title_id = (int)$id;

        $mainPage->save();
    }

    public function deleteTitle($id)
    {
        $title = new Title();

        $title->deleteTitle((int)$id);
    }

    public function updateHeader($id)
    {
        $mainPage = MainPage::find($this::ROW_ID);

        $mainPage->header_id = (int)$id;

        $mainPage->save();
    }

    public function deleteHeader($id)
    {
        $header = new Header();

        $header->deleteHeader((int)$id);
    }

    public function updateSubheader($id)
    {
        $mainPage = MainPage::find($this::ROW_ID);

        $mainPage->subheader_id = (int)$id;

        $mainPage->save();
    }

    public function deleteSubheader($id)
    {
        $subheader = new Subheader();

        $subheader->deleteSubheader((int)$id);
    }

    public function updateImage($id)
    {
        $mainPage = MainPage::find($this::ROW_ID);

        $mainPage->image_id = (int)$id;

        $mainPage->save();
    }

    public function deleteImg($id)
    {
        $img = new Image();

        $img->deleteImg((int)$id);
    }
}
