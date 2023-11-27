<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CatalogRequest;
use App\Models\Admin\Catalog\Catalog;
use App\Models\Admin\Catalog\Category;
use Inertia\Inertia;

class CatalogsPageController extends Controller
{
    public function index()
    {
        $data = Catalog::all()->toArray();

        return Inertia::render('AdminPage/CatalogPage/CatalogPage', ['catalogs' => $data]);
    }

    public function indexJson()
    {
        $data = Catalog::all()->toArray();

        return $data;
    }

    public function addCatalog(CatalogRequest $request): void
    {
        $data = $request->validated();

        $value = $data['title'];

        $catalog = new Catalog();

        $catalog->set($value);
    }

    public function updateCatalog(CatalogRequest $request): void
    {
        $data = $request->validated();

        $id = (int) $data['id'];
        $value = $data['title'];

        $catalog = new Catalog();

        $catalog->updateCatalog($id, $value);
    }

    public function deleteCatalog(int $id): void
    {
        $catalog = Catalog::find($id);

        $catalog->delete();
    }
}
