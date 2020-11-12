import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    
  Route.get('/', 'WheelsController.index')
  
  Route.post('/', 'WheelsController.create')
  
  Route.get('/:id', 'WheelsController.show')
  
  Route.put('/:id', 'WheelsController.update')
  
  Route.delete('/:id', 'WheelsController.destroy')
  
}).prefix('/api/v1/wheels').where('id', /^[0-9]+$/)