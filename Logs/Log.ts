export interface ILog extends Document {
  usuarioId: string;
  accion: string;
  detalles: Record<string, any>;
  fecha: Date;
}

export default ILog;