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
        $catalog = Catalog::find($id);

        $data = $catalog->categories->toArray();

        return $data;
    }

    public function addCatalog(CatalogRequest $request): void
    {
        $data = $request->validated();

        $value = $data['catalog_title'];

        $catalog = new Catalog();

        $catalog->set($value);
    }

    public function addCategory(CatalogRequest $request): void
    {

        $data = $request->validated();

        $id = (int) $data['catalog_id'];
        $value = $data['category_title'];

        $category = new Category();

        $category->set($id, $value);
    }

    public function updateCatalog(CatalogRequest $request): void
    {
        $data = $request->validated();

        $id = (int) $data['catalog_id'];
        $value = $data['catalog_title'];

        $catalog = new Catalog();

        $catalog->updateCatalog($id, $value);
    }

    public function updateCategory(CatalogRequest $request): void 
    {
        $data = $request->validated();

        $id = (int) $data['category_id'];
        $value = $data['category_title'];

        $category = new Category();

        $category->updateTitle($id, $value);
    }

    public function updateCatalogForCategory(CatalogRequest $request): void
    {
        $data = $request->validated();

        $catalog_id = (int) $data['catelog_id'];

        $category_id = (int) $data['category_id'];

        $category = new Category();

        $category->updateCatalog($catalog_id, $category_id);
    }

    public function deleteCatalog(int $id): void
    {
        $catalog = Catalog::find($id);

        $catalog->delete();
    }

    public function deleteCategory(int $id)
    {
        $category = Category::find($id);
        
        $category->delete();
    }
}
