import { ICategory } from "../models/product"

export const corn: ICategory = { id:1,category: "Кукуруза", subCategory: ["Aвстрийской селекции", "Молдавской селекции", "Французской селекции"],  img: "https://cdn2.thecatapi.com/images/MTk3NzY4NQ.jpg" }

export const soya: ICategory = { id:2,category: "Соя", subCategory: [] , img: "https://cdn2.thecatapi.com/images/MTk3NzY4NQ.jpg" }

export const cereals: ICategory = {  id:3,category: "Зерновые ", subCategory: ["Пшеница озимая", "Пщеница яровая", "Озимая тритикале", "Рожь"], img: "https://cdn2.thecatapi.com/images/MTk3NzY4NQ.jpg" }

export const rapeseed: ICategory = { id:4, category: "Рапс", subCategory: ["Озимовый яровой"], img: "https://cdn2.thecatapi.com/images/MTk3NzY4NQ.jpg"  }

export const herbs: ICategory = { id:5,category: "Травы", subCategory: [] , img: "https://cdn2.thecatapi.com/images/MTk3NzY4NQ.jpg" }

export const fertilizer: ICategory = {id:6, category: "Удобрения", subCategory: ["Микро удобрения", "Макро удобрения"] , img: "https://cdn2.thecatapi.com/images/MTk3NzY4NQ.jpg" }

export const allCategories = [corn,soya,cereals,rapeseed,herbs,fertilizer]