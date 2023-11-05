<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CatalogRequest;
use App\Models\Admin\Catalog\Catalog;
use App\Models\Admin\Catalog\Category;

class CatalogsPageController extends Controller
{
    public function index()
    {
        $data = Catalog::all()->toArray();

        return $data;
    }

    public function allCategory(): array
    {
        $data = Category::all()->toArray();

        return $data;
    }

    public function categoriesForCatalog(int $id): array
    {
        $catalog = new Catalog();

        $data = $catalog->categories;

        return $data;
    }

    public function addCatalog(CatalogRequest $request): void
    {
        $value = $request->catalog_title;

        $catalog = new Catalog();

        $catalog->set($value);
    }

    public function addCategory(CatalogRequest $request): void
    {
        $id = (int) $request->catalog_id;
        $value = $request->category_title;

        $category = new Category();

        $category->set($id, $value);
    }

    public function updateCatalog(CatalogRequest $request): void
    {
        $id = (int) $request->catalog_id;
        $value = $request->catalog_title;

        $catalog = new Catalog();

        $catalog->updateCatalog($id, $value);
    }

    public function updateCategory(CatalogRequest $request): void 
    {
        $id = (int) $request->category_id;
        $value = $request->category_title;

        $category = new Category();

        $category->updateTitle($id, $value);
    }

    public function updateCatalogForCategory(CatalogRequest $request): void
    {
        $catalog_id = (int) $request->catelog_id;

        $category_id = (int) $request->category_id;

        $category = new Category();

        $category->updateCatalog($catalog_id, $category_id);
    }
}
