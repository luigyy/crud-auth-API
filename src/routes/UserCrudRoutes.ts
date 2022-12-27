import express from "express";
const router = express.Router();
import {
  readUser,
  updateUser,
  deleteUser,
} from "../controllers/userCrudController";

//create user already implemented in /auth/register
router.post("/read/:id", readUser);
router.post("/update/:id", updateUser);
router.post("/delete/:id", deleteUser);

export default router;
