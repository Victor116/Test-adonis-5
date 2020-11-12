import Env from '@ioc:Adonis/Core/Env'

module.exports = {
  connection: Env.get('DB_CONNECTION', 'mysql') as string,

  connections: {
    mysql: {
      client: 'mysql',
      connection: {
        host: Env.get('DB_HOST', '127.0.0.1') as string,
        port: Number(Env.get('DB_PORT', 3306)),
        user: Env.get('DB_USER', 'lucid') as string,
        password: Env.get('DB_PASSWORD', 'lucid') as string,
        database: Env.get('DB_NAME', 'lucid') as string,
      },
      healthCheck: false,
    },
  }
}