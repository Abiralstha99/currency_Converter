import express from "express";
import { showForm, convert } from "../controllers/converterController.js";
const router = express.Router();

router.get('/', showForm);
router.post('/convert', convert);

export default router;
