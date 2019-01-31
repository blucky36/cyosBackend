module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/cyos_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
