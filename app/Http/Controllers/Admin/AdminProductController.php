<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest;
use App\Models\Product\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class AdminProductController extends Controller
{
    public function index()
    {
        $products = DB::table('products')
            ->join('categories', 'categories.id', '=', 'products.category_id')
            ->select('products.*', 'categories.title as category_title', 'categories.catalog_id')
            ->get();

        return Inertia::render('AdminPage/ProductList/ProductListPage', [
            'products' => $products,
        ]);
    }

    public function indexJson(string $limit): JsonResponse
    {
        $products = DB::table('products')
            ->join('categories', 'categories.id', '=', 'products.category_id')
            ->select('products.*', 'categories.title as category_title', 'categories.catalog_id')
            ->paginate($limit);

        return response()->json($products);
    }

    public function create()
    {
        return Inertia::render('AdminPage/Forms/CreateProduct');
    }

    public function save(ProductRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if (!isset($data['product_id'])) {
            $product = Product::create($data);

            $product->setImages($request);

            $product->setVideo($request);

            $product->setOptions($request);

            return redirect()->route('products.get');
        }

        $product = Product::find($data['product_id']);

        $product->update($data);

        $product->setImages($request);

        $product->setVideo($request);

        $product->setOptions($request);

        return redirect(route('products.get'));
    }

    public function show(int $id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                "message" => "Product id: $id not found"
            ]);
        }

        $images = $product->images()->getResults();

        $video = $product->videos()->getResults();

        $optionsList = $product->getOptionsList()->first();

        $optionsData = [];

        if ($optionsList) {
            $options = $optionsList->options()->getResults();
            foreach ($options as $option) {
                $optionsData[$option->title] = [$option->optionValue()->getResults()];
            }
        }

        return response()->json([$product, $images, $video, $optionsData]);
    }

    public function update(Product $product): Response
    {
        $video = $product->videos()->getResults();

        return Inertia::render('AdminPage/Forms/UpdateProduct', [
            'product' => $product,
            'video_link' => $video
        ]);
    }

    public function delete(int $id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product) {
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
