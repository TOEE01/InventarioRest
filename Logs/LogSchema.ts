import { Schema } from "mongoose";
import { ILog } from "./Log"

const LogSchema = new Schema<ILog>({
    usuarioId: { type: String, required: true},
    accion: { type: String, required: true},
    detalles: { type: Schema.Types.Mixed},
    fecha: { type: Date, default: Date.now}
});

export default LogSchema;