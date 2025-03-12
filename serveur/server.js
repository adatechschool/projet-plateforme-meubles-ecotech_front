import cors from "cors";
import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const port = 3000;
app.use(cors());

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_0hDFSg7QmuCn@ep-gentle-shape-a98o7km5-pooler.gwc.azure.neon.tech/neondb?sslmode=require",
  ssl: {
    rejectUnauthorized: true,
  },
});

const getData = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM product;");
    return result.rows;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const data = await getData();
console.log(data);
