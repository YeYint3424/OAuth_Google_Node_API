require('dotenv').config();

module.exports = {
  development: {
    database: 'google-oauth',
    use_env_variable: 'DATABASE_DEV_URL',
    dialect: 'postgres',
  },
  // test: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: 'postgres',
  // },
  production: {
    database: 'google-oauth',
    use_env_variable: 'DATABASE_DEV_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }
  },
}