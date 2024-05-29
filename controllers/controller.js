import path from "path";
import {
  addSongQuery,
  getSongsQuery,
  editSongQuery,
  deleteSongQuery,
} from "../model/queries.js";

const __dirname = path.resolve();

const home = (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
};

const addSong = async (req, res) => {
  try {
    const { titulo, artista, tono } = req.body;
    const result = await addSongQuery(titulo, artista, tono);
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

const getSongs = async (req, res) => {
  try {
    const result = await getSongsQuery();
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

const editSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const result = await editSongQuery(titulo, artista, tono, id);
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteSong = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await deleteSongQuery(id);
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export { home, addSong, getSongs, editSong, deleteSong };
