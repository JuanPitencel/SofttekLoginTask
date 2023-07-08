import express from "express";
const router = express.Router();

import {obtenerProyecto, 
    obtenerProyectos,
    nuevoProyecto, 
    editarProyecto, 
    eliminarProyecto, 
    agregarColaborador, 
    eliminarColaborador, 
    } 
    from "../controllers/proyectoController.js";

    import checkAuth from "../midleware/checkAuth.js";


    router
        .route("/")
        .get(checkAuth, obtenerProyectos)
        .post(checkAuth, nuevoProyecto);

    router
        .route("/:id")
        .get(checkAuth, obtenerProyecto)
        .put(checkAuth, editarProyecto)
        .delete(checkAuth, eliminarProyecto)
    

    router.post("/agregar-colaborador", checkAuth, agregarColaborador);
    router.post("/eliminar-colaborador", checkAuth, eliminarColaborador);

    export default router;
