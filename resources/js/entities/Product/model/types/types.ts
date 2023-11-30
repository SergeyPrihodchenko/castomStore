export interface IProductResponse {
    current_page: number,
    data: IProduct[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: [],
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string | null,
    to: number,
    total: number
}

export interface IProduct {
    id: number,
    title: string,
    category_id: number,
    description: string,
    price: number,
    quantity: number,
    created_at: Date,
    updated_at: Date
}

export interface ProductImage {
    id: number,
    img_name: string,
    url: string,
    isMain: boolean,
    product_id: number
}

export interface ProductVideo {
    id: number,
    video_name: string,
    url: string,
    product_id: number
}
