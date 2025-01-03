import express from "express"
import {signupValidation,loginValidation} from '../../middleware/auth.js'
import { handleRegisterUser,handleLoginUser} from "../../controllers/authController.js";
const router=express.Router();

router.post("/register",signupValidation,handleRegisterUser);
router.post("/login",loginValidation,handleLoginUser);
router.get("/", (req, res) => {
    console.log("Hello");
    return res.status(200).json({ message: "Hello, World!" });
});

export default router;