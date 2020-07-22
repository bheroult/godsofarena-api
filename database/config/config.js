const Sequelize = require("sequelize");
const env = require("../../app/env");
const log = require("../../utils/log")(module);

module.exports = {

  development: {
    operatorsAliases: Sequelize.Op,
    logging: sql => log.debug(sql),
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "postgres"
  },
  test: {
    operatorsAliases: Sequelize.Op,
    logging: sql => log.debug("[TEST]", sql),
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME + "_test",
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "postgres"
  },
  production: {
    operatorsAliases: Sequelize.Op,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "postgres"
  }

};
