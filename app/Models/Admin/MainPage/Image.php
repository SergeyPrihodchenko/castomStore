<?php

namespace App\Models\Admin\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    use HasFactory;

    const PATH_IMAGE_MAIN_SAVE = 'public/mainPage/images';

    protected $fillable = [
        'img_path',
        'img_title'
    ];

    public $timestamps = false;

    public function set($image): void
    {
        $originalName = $image->getClientOriginalName();

        $point = strripos($originalName, '.');

        $title = substr_replace($originalName, '', $point);

        $name = $image->store($this::PATH_IMAGE_MAIN_SAVE);

        $saveName = str_replace('public', 'storage', $name);

        $this->img_path = $saveName;

        $this->title = $title;

        $this->save();
    }

    public function deleteImg($id): void
    {
        $img = $this::find($id);

        $nameImg = $img->img_path;

        Storage::delete($nameImg);

        $checkFile = Storage::exists($nameImg);

        if(!$checkFile) {
            $img->delete();
        }
    }
}
