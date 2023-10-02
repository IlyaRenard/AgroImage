import { ICategory } from "../models/product"

export const corn: ICategory = {
    id: 1,
    category: "Кукуруза",
    subCategory: ["Кукуруза"],
    img: "images/category/corn.jpg"
}

export const bobovye: ICategory = {
    id: 2,
    category: "Бобовые",
    subCategory: ["Соя","Подсолнечник","Горох"],
    img: "images/category/soya.jpg"
}

export const cereals: ICategory = {
    id: 3,
    category: "Зерновые",
    subCategory: ["Пшеница озимая","Рожь озимая", "Ячмень озимая", "Пшеница яровая"],
    img: "images/category/zerno.jpg"
}

export const rapeseed: ICategory = {
    id: 4,
    category: "Рапс",
    subCategory: ["Яровой рапс","Озимый рапс"],
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

export const allCategories = [corn, bobovye, cereals, rapeseed, herbs, fertilizer]


