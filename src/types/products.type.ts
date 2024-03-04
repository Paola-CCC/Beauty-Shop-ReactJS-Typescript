export type Products = {
    id: number;
    name: string;
    descriptionLong: string;
    descriptionShort: string;
    quantity: number;
    tags: string[];
    categories: string[];
    notes: number;
    createdAt: string;
    images: string[];
    price: number;
} 

export type CartItems = {
    id: number, 
    quantity: number,
    price: number,
    priceQty?: number
}