import { ICategory } from "../models/product"

export const corn: ICategory = {
    id: 1,
    category: "Кукуруза",
    subCategory: ["Aвстрийской селекции", "Молдавской селекции", "Французской селекции"],
    img: "images/category/corn.jpg"
}

export const soya: ICategory = {
    id: 2,
    category: "Соя",
    subCategory: ["Соя"],
    img: "images/category/soya.jpg"
}

export const cereals: ICategory = {
    id: 3,
    category: "Зерновые ",
    subCategory: ["Пшеница озимая", "Пщеница яровая", "Озимая тритикале", "Рожь"],
    img: "images/category/zerno.jpg"
}

export const rapeseed: ICategory = {
    id: 4,
    category: "Рапс",
    subCategory: ["Озимовый яровой"],
    img: "images/category/raps.jpg"
}

export const herbs: ICategory = {
    id: 5,
    category: "Травы",
    subCategory: ["Травы"],
    img: "images/category/trava.jpg"
}

export const fertilizer: ICategory = {
    id: 6,
    category: "Удобрения",
    subCategory: ["Микро удобрения", "Макро удобрения"],
    img: "images/category/udobr.jpg"
}

export const allCategories = [corn, soya, cereals, rapeseed, herbs, fertilizer]


