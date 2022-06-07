import express  from "express";
import { createPost, deletePost, getPost, uppdatePost } from "../Controller/PostController.js";
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', uppdatePost)
router.delete('/:id', deletePost)
export default router;