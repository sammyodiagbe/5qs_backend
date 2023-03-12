import express from "express";
import { createUserAccount } from "../handlers/authHandlers";

const router = express.Router();

router.get("/create-account", createUserAccount);

export default router;
