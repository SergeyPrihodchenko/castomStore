<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainPage extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'header',
        'subheader',
        'image'
    ];

    protected $table = 'main_page_attributes';

    const PATH_IMG = 'public/mainPage/';

    public function getAttributes(): array
    {
        $title = $this->all('title_id');
        $header = $this->all('header_id');
        $subheader = $this->all('subheader_id');
        $image = $this->all('image_id');
        dd();
    }
}