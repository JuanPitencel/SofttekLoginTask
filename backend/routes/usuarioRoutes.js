import express from "express";
const router = express.Router();
import {registrar, autenticar, confirmar, olvidemicontrasena, comprobacionTk, nuevoPassword, perfil} from "../controllers/usuarioController.js";
import checkAuth from "../midleware/checkAuth.js";
// Autenticación, Registro y Confirmación de Usuarios.

router.post("/", registrar); //crea nuevo usuario
router.post("/login", autenticar); //autenticado de usuario
router.get("/confirmar/:token", confirmar); // confirmar usuario
router.post("/olvidemicontrasena", olvidemicontrasena); //reseteo de password
router.route("/olvidemicontrasena/:token").get(comprobacionTk).post(nuevoPassword); //validar token de restablecimiento/ Almacenar nuevo password

router.get("/perfil", checkAuth, perfil,);




export default router;