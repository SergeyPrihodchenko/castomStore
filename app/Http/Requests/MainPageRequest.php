<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MainPageRequest extends FormRequest
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
            'title' => "nullable|string|max:255",
            'header' => 'nullable|string|max:255',
            'subheader' => 'nullable|string|max:255',
            'image' => 'nullable|image'
        ];
    }
}
