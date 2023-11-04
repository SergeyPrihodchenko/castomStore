<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class OptionValue extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'content',
        'option_id'
    ];

    public function option():HasOne
    {
        return $this->hasOne(Option::class);
    }
}
