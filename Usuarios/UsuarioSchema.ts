import { Schema } from "mongoose";
import { IUsuario } from "./Usuarios";

const UsuarioSchema = new Schema<IUsuario>({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  rol: { type: String, enum: ['USUARIOMASTER', 'ADMIN', 'EMPLEADO'], required: true },
  estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' },
  fechaCreacion: { type: Date, default: Date.now }
});
export default (UsuarioSchema);