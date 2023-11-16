export interface ProductSchema {
    title: string,
    description: string,
    category_id: number,
    price: number,
    quantity: number,
    options?: any,
    video_link?: string
}