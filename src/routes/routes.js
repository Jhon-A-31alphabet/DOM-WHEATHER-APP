
import { Router } from "express";


const router = Router();


router.get("/",(req,res)=> {

    res.render("index",{country:"DOM"})
    
    
});



export default router;

