import { IProduct } from "../models/product";
import { corn, soya } from "./category";



export const products: IProduct[] = [{
    id: '1',
    title: "Кукуруза",
    description: "Супер кукуруза",
    category: {...corn,subCategory:["Aвстрийской селекции"]},
}, {
    id: '2',
    title: "Соя",
    description: "Лучшая соя в мире!",
    category: {...soya,subCategory:["Соя"]}
}]