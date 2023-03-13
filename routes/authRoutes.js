import express from "express";
import { createUserAccount, logUserIn } from "../handlers/authHandlers.js";

const router = express.Router();

router.get("/create-account", createUserAccount);
router.get("/login", logUserIn);

export default router;
