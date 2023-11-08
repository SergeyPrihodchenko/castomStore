<?php

namespace App\Models\Admin\Catalog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Catalog extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'catalog_title'
    ];

    public function set(string $value): void
    {
        $this->title = $value;

        $this->save();
    }

    public function deleteCatalog(int $id): void
    {
        $catalog = $this->find($id);

        $catalog->delete();
    }

    public function updateCatalog(int $id, string $value): void
    {
        $catalog = $this->find($id);

        $catalog->title = $value;

        $catalog->save();
    }

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class, 'catalog_id', 'id');
    }
}
