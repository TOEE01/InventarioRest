import { Schema } from "mongoose";
import { IMovimiento } from "./Movimientos";

const MovimientoSchema = new Schema<IMovimiento>({
  productoId: { type: String, required: true },
  usuarioId: { type: String, required: true },
  tipo: { type: String, enum: ['entrada', 'salida'], required: true },
  cantidad: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  descripcion: { type: String }
});

export default MovimientoSchema;