const Pool = require("pg").Pool;

const pool = new Pool({
  user: "adichap",
  password: "password123",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
