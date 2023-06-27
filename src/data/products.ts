import { IProduct } from "../models/product";
import { corn, soya, herbs, cereals } from "./category";




export const products: IProduct[] = [{
    id: '1',
    title: "Кукуруза",
    description: "Супер кукуруза",
    image: 'images/products/udobr.jpg',
    category: { ...corn, subCategory: ["Aвстрийской селекции"] },
}, {
    id: '2',
    title: "Трава",
    description: "Лучшая трава в мире!",
    category: { ...herbs, subCategory: ["Трава"] }
},
{
    id: '3',
    title: "Соя",
    description: "Лучшая соя в мире!",
    category: { ...soya, subCategory: ["Соя"] }
},
{
    id: '4',
    title: "Соя",
    description: "Лучшая соя в мире!",
    category: { ...soya, subCategory: ["Соя"] }
},
{
    id: '5',
    title: "Пшеница озимая",
    description: "Лучшая пшеница в мире!",
    category: { ...cereals, subCategory: ["Пшеница озимая"] }
}]