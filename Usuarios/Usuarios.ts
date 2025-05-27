import { Schema, model, Document } from 'mongoose'; 

export interface IUsuario extends Document {
  nombre: string;
  correo: string;
  contrasena: string;
  rol: 'USUARIOMASTER' | 'ADMIN' | 'EMPLEADO';
  estado: 'activo' | 'inactivo';
  fechaCreacion: Date;
}

export default IUsuario;