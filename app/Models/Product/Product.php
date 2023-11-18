<?php

namespace App\Models\Product;

use App\Http\Requests\Product\ProductRequest;
use App\Models\Admin\Catalog\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory;

    const PRODUCT_IMAGES_PATH = 'public/products/images';

    protected $fillable = [
        'title',
        'description',
        'price',
        'quantity',
        'category_id'
    ];

    protected $casts = [
       'images' => 'array'
    ];

    public function setOptions(Request $request): void
    {   
        $options = $request['options'];

        if($options){
            $productOptions_id = ProductOption::create([
                'product_id' => $this->id
            ])->id;

            $i = 0;

            foreach($options as $option){
                $optionId = Option::create([
                    'product_options_id' => $productOptions_id,
                    'title' => array_keys($options)[$i]
                ])->id;

                $i++;
                
                foreach($option as $value){
                    OptionValue::create([
                        'option_id' => $optionId,
                        'content' => $value
                    ]);
                }
            }
        }
    }

    public function setImages(Request $request): void
    {  
        if($request['images']){
            $files = $request['images'];

            foreach($files as $file){
                $name = $file->getClientOriginalName();
                $url = $file->store($this::PRODUCT_IMAGES_PATH);

                ProductImage::create([
                    'img_name' => $name,
                    'url' => $url,
                    'product_id' => $this->id
                ]);

            }
        }
    }

    public function deleteImages(): void
    {
        $images = $this->images()->getResults();

        if($images){
            foreach($images as $image){
                $url = $image->url;
                Storage::delete($url);
            }
        }
        
    }

    public function setVideo(Request $request): void
    {
        if($request['video_link']){
            ProductVideo::create([
                'product_id' => $this->id,
                'video_name' => 'video',
                'url' => $request['video_link']
            ]);
        }
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function videos(): HasMany
    {
        return $this->hasMany(ProductVideo::class);
    }

    public function getOptionsList(): HasOne
    {
        return $this->hasOne(ProductOption::class);
    }
}
