import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { message: 'Bienvenido a Rines' }
  })
  
}).prefix('/api/v1/wheel').where('id', /^[0-9]+$/)