<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Option extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'product_options_id',
        'title'
    ];

    public function optionsList(): HasOne
    {
        return $this->hasOne(ProductOption::class);
    }

    public function optionValue(): HasMany
    {
        return $this->hasMany(OptionValue::class, 'option_id');
    }
}
