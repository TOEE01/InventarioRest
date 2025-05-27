import { Schema } from "mongoose";
import { ICategoria } from "./Categoria";

const CategoriaSchema = new Schema<ICategoria>({
  nombre: { type: String, required: true },
  descripcion: { type: String }
});

export default CategoriaSchema;
