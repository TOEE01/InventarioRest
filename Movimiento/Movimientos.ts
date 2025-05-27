export interface IMovimiento extends Document {
  productoId: string;
  usuarioId: string;
  tipo: 'entrada' | 'salida';
  cantidad: number;
  fecha: Date;
  descripcion: string;
}

export default IMovimiento