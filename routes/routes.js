
import { Router } from "express";


const router = Router();



router.get("/",(req,res)=> {

    res.render("index",{country:"DOM"})
    
});

router.get("/windy",(req,res)=>{
    res.redirect("https://www.windy.com/?19.204,-69.752,8,m:ecraedK")
})

router.get("/:another",(req,res)=>{
    res.redirect("/");
})

router.get("/isAlive",(req,res)=>{
    res.redirect('/');
})

export default router;

