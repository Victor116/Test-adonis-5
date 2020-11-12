import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    
  Route.get('/', 'WheelController.index')
  
  Route.post('/', 'WheelController.create')
  
  Route.get('/:id', 'WheelController.show')
  
  Route.put('/:id', 'WheelController.update')
  
  Route.delete('/:id', 'WheelController.delete')
  
}).prefix('/api/v1/wheel').where('id', /^[0-9]+$/)