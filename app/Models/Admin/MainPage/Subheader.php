<?php

namespace App\Models\Admin\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subheader extends Model
{
    use HasFactory;

    protected $fillable = [
        'subheader'
    ];

    public $timestamps = false;

    public function set(string $value): void
    {
        $this->subheader = $value;
        $this->save();
    }
}
