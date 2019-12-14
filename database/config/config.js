require('dotenv').config();

const baseDbSetting = {
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  timezone: '+09:00',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    idle: 10000
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  }
};

module.exports = {
  development: Object.assign(
    {
      database: 'blended'
    },
    baseDbSetting
  ),
  test: Object.assign(
    {
      database: 'blended'
    },
    baseDbSetting
  ),
  production: Object.assign(
    {
      database: 'blended'
    },
    baseDbSetting
  )
};
