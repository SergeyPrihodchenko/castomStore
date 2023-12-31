<?php

namespace App\Models\Admin\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Header extends Model
{
    use HasFactory;

    protected $fillable = [
        'header'
    ];

    public $timestamps = false;

    public function set(string $value): void
    {
        $this->title = $value;
        $this->save();
    }

    public function deleteHeader($id): void
    {
        $header = $this::find($id);

        $header->delete();
    }
}
