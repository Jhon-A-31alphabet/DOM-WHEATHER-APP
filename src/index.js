import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/routes.js"; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static('public', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

app.set("port", process.env.PORT || 3000);

app.set("views", join(__dirname, "views")); 
app.set("view engine", "ejs"); 



app.use(indexRoutes);

// Run server


app.listen(app.get("port"), () => {
  console.log(`Server running on =>  http://localhost:${app.get("port")}`);
});
