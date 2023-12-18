<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class ProductFilterController extends Controller
{
    public function get(string $search): JsonResponse
    {
        $products = DB::table('products')
            ->where('title', 'LIKE', '%' . $search . '%')
            ->get();

        return response()->json($products);
    }
}
