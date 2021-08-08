export type IBurgerElement = {
    key?: string;
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string,
}

export type TLoginRequest = {
    name: string
    password: string
}

export type TOrderData = {
    _id: string;
    ingredients: Array<string>;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
};


export type TUser = {
    name: string,
    email: string
}