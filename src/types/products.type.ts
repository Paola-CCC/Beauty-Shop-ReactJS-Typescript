export type Products = {
    id: number | null,
    brandName: string,
    name: string,
    descriptionLong: string,
    descriptionShort: string,
    thumbnail: string,
    quantity: number | null,
    tags?: string[],
    subCategories?: string[],
    categories: string,
    notes?: any,
    createdAt: string,
    price: number | null,
} 

export type CartItems = {
    id: number, 
    quantity: number,
    price: number,
    priceQty?: number,
    thumbnail?: string,
    descriptionShort?: string,
    brandName?: string,
}