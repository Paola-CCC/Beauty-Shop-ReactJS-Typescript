export type Products = {
    id: number | null,
    brandName: string,
    name: string,
    imgSrc: string,
    descriptionLong: string,
    descriptionShort: string,
    quantity: number | null,
    tags: string[],
    categories: string[],
    notes?: any,
    createdAt: string,
    images: string[],
    price: number | null,
} 

export type CartItems = {
    id: number, 
    quantity: number,
    price: number,
    priceQty?: number,
    imgSrc?: string,
    descriptionShort?: string,
    brandName?: string,
}