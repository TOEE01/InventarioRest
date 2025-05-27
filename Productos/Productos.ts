import { Document } from 'mongoose';

export interface IAtributos{
    [clave: string]: string |number;
}

export interface IProductos extends Document{
    nombre: string;
    categoriaId: string;
    stock: number;
    precio: number;
    atributos: IAtributos;
    fechaRegistro: Date;
}

export default IProductos;