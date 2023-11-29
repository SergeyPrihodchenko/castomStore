<?php

namespace App\Models\Admin\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    use HasFactory;

    const PATH_IMAGE_MAIN = 'storage/mainPage/images';

    protected $fillable = [
        'img_path'
    ];

    public $timestamps = false;

    public function set($image): void
    {
        $originalName = $image->getClientPriginalName();

        $point = strripos($originalName, '.');

        $title = mb_substr($originalName, $point);

        $name = $image->store($this::PATH_IMAGE_MAIN);

        $this->img_path = $name;

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
