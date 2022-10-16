import * as mysql from "mysql2/promise.js";
import dotenv from "dotenv";

dotenv.config();

const config = {
  /* don't expose password or any sensitive info, done only for demo */
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "n3wbi329m3d",
  database: process.env.DB_NAME || "kantor",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  dateStrings: true,
  multipleStatements: true,
};
const conn = mysql.createPool(config);

const query = async (myquery) => {
  try {
    const [result] = await conn.query(myquery);
    return result;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};

export { query };
