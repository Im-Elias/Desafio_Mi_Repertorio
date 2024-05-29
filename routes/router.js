import { Router } from "express";
import {
  home,
  addSong,
  getSongs,
  editSong,
  deleteSong,
} from "../controllers/controller.js";

const router = Router();

// Routes
router.get("/", home);

router.post("/cancion", addSong);

router.get("/canciones", getSongs);

router.put("/cancion/:id", editSong);

router.delete("/cancion/", deleteSong);

export default router;
