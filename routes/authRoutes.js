import express from "express";
import { createUserAccount, logUserIn } from "../handlers/authHandlers";

const router = express.Router();

router.get("/create-account", createUserAccount);
router.get("/login", logUserIn);

export default router;
