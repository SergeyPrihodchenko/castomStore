<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_id' => 'nullable|numeric',
            'title' => 'string|max:255',
            'description' => 'nullable|string|max:3000',
            'price' => 'nullable|numeric',
            'quantity' => 'nullable|numeric',
            'category_id' => 'required|numeric',
            // 'images' => 'nullable|array',
            // 'images.*' => 'nullable|file'
            'video_link' => 'nullable|string|max:350',
            'options' => 'nullable|array',
        ];
    }
}
