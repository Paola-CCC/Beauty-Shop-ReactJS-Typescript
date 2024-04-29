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
    notes?: number,
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
    notes?: number,
    date?: string
}


export type searchProduct = { 
    brandId: number | null,
    categoryId: number | null ,
    subCategoryId: number | null,
    minPrice: number | null,
    maxPrice: number | null,
}

export type Categories = {
    id: number,
    name: string
}

export type Brands = {
    id: number,
    name: string,
    categories: Categories[]
}

export type SubCategories = {
    id: number,
    name: string,
    categoryId: number,
    categoryName: string
}

export type CriteriasProducts = {
    brands : Brands[],
    categories: Categories[],
    subCategories: SubCategories[]
}