import express from "express";
import { signin, signup } from "../controllers/user.js";

const router = express.Router();

// add routes here
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
