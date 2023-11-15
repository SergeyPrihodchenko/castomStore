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
