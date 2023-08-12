require("dotenv").config();

const config = {
  development: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name,
    host: process.env.db_host,
    dialect: "postgres",
  },
};
module.exports = config;
