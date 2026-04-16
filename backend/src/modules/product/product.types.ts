import { Category } from "./product.schema";

export interface createProductDTO {
    name:string;
    description:string;
    category:Category;
    rentAmount:number,
    stock:number
}

export interface getProductsDTO{
    name?:string;
    category?:string;
    rentAmount?:number;
}

export interface getProdcutByIdDTO{
    id?:string;
}

export interface updateProductDTO{
    name:string;
    description:string;
    rentAmount:number;
    category:Category;
    stock:number;
}