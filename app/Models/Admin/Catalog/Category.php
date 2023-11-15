<?php

namespace App\Models\Admin\Catalog;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title',
        'catalog_id'
    ];

    public function set(int $catalog_id, string $value): void
    {
        $this->catalog_id = $catalog_id;

        $this->title = $value;

        $this->save();
    }

    public function updateTitle(int $id, string $value): void
    {
        $category = $this->find($id);

        $category->title = $value;

        $category->save();
    }

    public function updateCatalog(int $id, int $catalog_id): void
    {
        $category = $this->find($id);

        $category->catalog_id = $catalog_id;

        $category->save();
    }

    public function deleteCategory(int $id): void
    {
        $category = $this->find($id);

        $category->delete();
    }

    public function catalog(): BelongsTo
    {
        return $this->belongsTo(Catalog::class, 'catalog_id', 'id');
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
