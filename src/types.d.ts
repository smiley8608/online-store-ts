export interface Address {
    buildingNo: string,
    street: string,
    locality: string,
    city: string,
    state: string
    country: string
}

export interface Product {
    title: string,
    description: string,
    price: number,
    rating: number,
    image: string,
    imageList: string[]
}

export interface CartItem {
    product: Product[],
    quantity: number
}

export interface User {
    _id: string,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    address: Address[],
    cart: Array
}

export interface InitialState {
    user: User | null,
    auth: boolean
}