import "dotenv/config";

export default {
  client: "mysql2",
  connection: process.env.JAWSDB_URL
};