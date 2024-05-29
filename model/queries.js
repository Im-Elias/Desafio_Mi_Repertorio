import pool from "../model/db.js";

const addSongQuery = async (titulo, artista, tono) => {
  try {
    const query = {
      text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
      values: [titulo, artista, tono],
    };
    const result = await pool.query(query);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      console.log("No se pudo insertar la cancion");
    }
  } catch (error) {
    console.log("Code: " + error.code + "\nMessage: " + error);
  }
};

const getSongsQuery = async () => {
  try {
    const query = { text: "SELECT * FROM canciones" };
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.log("Code: " + error.code + "\nMessage: " + error);
  }
};

const editSongQuery = async (titulo, artista, tono, id) => {
  try {
    const query = {
      text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *",
      values: [titulo, artista, tono, id],
    };
    const result = await pool.query(query);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      console.log("No se pudo editar la cancion");
    }
  } catch (error) {
    console.log("Code: " + error.code + "\nMessage: " + error);
  }
};

const deleteSongQuery = async (id) => {
  try {
    const query = {
      text: "DELETE FROM canciones WHERE id = $1 RETURNING *",
      values: [id],
    };
    const result = await pool.query(query);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      console.log("No se pudo eliminar la cancion");
    }
  } catch (error) {
    console.log("Code: " + error.code + "\nMessage: " + error);
  }
};

export { addSongQuery, getSongsQuery, editSongQuery, deleteSongQuery };
