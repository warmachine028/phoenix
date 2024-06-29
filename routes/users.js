import express from "express"
import { getUser, getUsers } from "../controllers/users.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUser)

export default router