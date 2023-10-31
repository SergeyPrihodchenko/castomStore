<?php

namespace App\Models\Admin\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title'
    ];

    public function set(string $value): void
    {
        $this->title = $value;
        $this->save();
    }

    public function deleteTitle($id): void
    {
        $title = $this::find($id);

        $title->delete();
    }
}
