export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: ICategory;
}

export interface ICategory {
    id:number;
    category: string;
    subCategory?: string[];
    img?: string;
}