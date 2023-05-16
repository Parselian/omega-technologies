export interface IProductsReducer {
    products: IProductInfo[]
}

export interface IProductInfo {
    id: number,
    name: string,
    price: number,
    imgPath: string,
    description?: string
}