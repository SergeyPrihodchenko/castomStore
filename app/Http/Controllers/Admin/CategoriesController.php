<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CatalogRequest;
use App\Models\Admin\Catalog\Catalog;
use App\Models\Admin\Catalog\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{

    public function index()
    {
        $data = Catalog::all()->toArray();

        return Inertia::render('AdminPage/CategoryPage/CategoryPage', ['catalogs' => $data]);
    }

    public function categoriesForCatalog(int $id): array
    {
        $catalog = Catalog::find($id);

        $data = $catalog->categories->toArray();

        return $data;
    }

    public function setCategory(CatalogRequest $request): void
    {

        $data = $request->validated();

        $id = (int) $data['catalog_id'];
        $value = $data['title'];

        $category = new Category();

        $category->set($id, $value);
    }

    public function updateCategory(CatalogRequest $request): void 
    {
        $data = $request->validated();

        $id = (int) $data['id'];
        $value = $data['title'];

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

    public function deleteCategory(int $id)
    {
        $category = Category::find($id);
        
        $category->delete();
    }
}
