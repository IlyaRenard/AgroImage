export interface IProduct {
    id: string;
    title: string;
    description: string;
    image?: string;
    category: ICategory;
}

export interface ICategory {
    id: number;
    category: string;
    subCategory?: string[];
    img?: string;
}
