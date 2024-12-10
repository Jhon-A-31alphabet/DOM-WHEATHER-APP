import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/routes.js"; // Archivo con las rutas de la aplicación

// Obtiene la ruta actual del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configuración de archivos estáticos (sirve archivos desde /public)
app.use(express.static('public', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Configuración del puerto
app.set("port", process.env.PORT || 3000);

// Configuración de la carpeta de vistas y motor de plantillas
app.set("views", join(__dirname, "views")); // Ruta a la carpeta de vistas
app.set("view engine", "ejs"); // Configura EJS como motor de plantillas

// Usa las rutas definidas en routes.js
app.use(indexRoutes);

// Inicia el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get("port")}`);
});
