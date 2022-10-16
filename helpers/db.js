import * as mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const config = {
  /* don't expose password or any sensitive info, done only for demo */
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  dateStrings: true,
  multipleStatements: true,
};
const conn = mysql.createPool(config);

async function query(myquery) {
  const result = await conn.query(myquery);

  return result;
}
export default {
  query,
};
