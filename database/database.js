const Sequelize = require("sequelize");
const modelsFactory = require("./models");
const env = require("../app/env");
const log = require("../utils/log")(module);
const configFile = require("./config/config");
const config = configFile[env.NODE_ENV];

module.exports = async function database() {
  log.info(
    `Trying to connect to database : mysql://******:******@${env.DB_HOST}:${
    env.DB_PORT
    }/${env.DB_NAME}`
  );

  // define config
  console.log("CONFIG", env.NODE_ENV);
  try {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
    process.on("SIGINT", async function () {
      try {
        await sequelize.close();
        process.exit(0);
      } catch (_) {
        process.exit(1);
      }
    });

    // define api's models
    const models = modelsFactory(sequelize);

    await sequelize.sync();
    log.info("connected to database");
    return { sequelize, models };
  } catch (e) {
    log.error("error trying to connect to database : ", e);
  }
};
