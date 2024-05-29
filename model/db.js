import pg from "pg";
const { Pool } = pg;
const { DB_HOST, DB_NAME, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

const config = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
};

const pool = new Pool(config);
export default pool;
