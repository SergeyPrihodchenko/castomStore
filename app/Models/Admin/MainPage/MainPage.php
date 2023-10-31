<?php

namespace App\Models\Admin\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MainPage extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_id',
        'header_id',
        'subheader_id',
        'image_id'
    ];

    public $timestamps = false;

    public function title(): BelongsTo
    {
        return $this->belongsTo(Title::class);
    }

    public function header(): BelongsTo
    {
        return $this->belongsTo(Header::class);
    }

    public function Subheader(): BelongsTo
    {
        return $this->belongsTo(Subheader::class);
    }

    public function imagePath(): BelongsTo
    {
        return $this->belongsTo(Image::class);
    }

    public function addAttributes(array $data): void
    {
        foreach ($data as $key => $value) {
            if(isset($value)) {
                switch ($key) {
                    case 'title':
                        (new Title)->set($value);
                        break;
                    case 'header':
                        (new Header)->set($value);
                        break;
                    case 'subheader':
                        (new Subheader)->set($value);
                        break;
                    case 'image':
                        (new Image)->set($value);
                        break;
                    
                    default:
                        # code...
                        break;
                }
            }
        }
    }
}
