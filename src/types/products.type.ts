export type Products = {
    id: number | null,
    brandName: string,
    name: string,
    descriptionLong: string,
    descriptionShort: string,
    quantity: number | null,
    tags: string[],
    categories: string[],
    notes: number | null,
    createdAt: string,
    images: string[],
    price: number | null,
} 

export type CartItems = {
    id: number, 
    quantity: number,
    price: number,
    priceQty?: number
}