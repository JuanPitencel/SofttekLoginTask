import mongoose from "mongoose";

const tareasSchema = mongoose.Schema({

    nombre: {
        type: String,
        trime: true,
        required: true,
    },

    descripcion: {
        type: String,
        trime: true,
        required: true,
    },

    estado: {
        type: Boolean,
        default: false,
    },
    fechaEntrega: {
        type: Date,
        required: true,
        default: Date.now,
    },

    prioridad: {
        type: String,
        required: true,
        enum: ["Baja", "Media","Alta"],
    },
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto",
    },
}, { timestamps: true}
)
const Tarea = mongoose.model("Tarea", tareasSchema);
export default Tarea;

