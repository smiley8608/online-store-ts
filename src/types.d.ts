export interface Address {
    buildingNo: string,
    street: string,
    locality: string,
    city: string,
    state: string
    country: string
}

export interface Product {
    _id: string,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    brand: string
}

export interface CartItem {
    product: Product,
    quantity: number
}

export interface User {
    _id: string,
    fname: string,
    lname: string,
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