<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest;
use App\Models\Admin\Catalog\Catalog;
use App\Models\Admin\Catalog\Category;
use App\Models\Product\Option;
use App\Models\Product\Product;
use App\Models\Product\ProductImage;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class AdminProductController extends Controller
{
    public function create(ProductRequest $request): JsonResponse
    {
        $data = $request->validated();

        $product = Product::create($data);

        $product->setImages($request);

        $product->setVideo($request);

        $product->setOptions($request);

        return response()->json($product);
    }

    public function show(int $id): JsonResponse
    {
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "message" => "Product id: $id not found"
            ]);
        }

        $images = $product->images()->getResults();

        $video = $product->videos()->getResults();

        $optionsList = $product->getOptionsList()->first();

        $optionsData = [];

        if($optionsList){
            $options = $optionsList->options()->getResults();
            foreach($options as $option){
                $optionsData[$option->title] = [$option->optionValue()->getResults()];
            }
        }

        return response()->json([$product, $images, $video, $optionsData]);
    }

    public function delete(int $id): JsonResponse
    {
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "message" => "Product id: $id not found"
            ]);
        }

        $product->deleteImages();

        $product::destroy($id);

        return response()->json([
            "message" => "Product saccessfuly deleted"
        ]);
    }
}
