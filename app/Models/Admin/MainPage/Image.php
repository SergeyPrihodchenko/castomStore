<?php

namespace App\Models\Admin\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    const PATH_IMAGE_MAIN = 'public/mainPage/image';

    protected $fillable = [
        'img_path'
    ];

    public $timestamps = false;

    public function set($image): void
    {
        $name = $image->store($this::PATH_IMAGE_MAIN);

        $this->img_path = $name;

        $this->save();
    }
}
