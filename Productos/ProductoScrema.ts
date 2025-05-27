import { Schema } from 'mongoose';
import { IProductos } from './Productos';

const ProductoSchema = new Schema<IProductos>({
  nombre: { type: String, required: true },
  categoriaId: { type: String, required: true },
  stock: { type: Number, default: 0 },
  precio: { type: Number, required: true },
  atributos: { type: Schema.Types.Mixed },
  fechaRegistro: { type: Date, default: Date.now }
});

export default ProductoSchema;
