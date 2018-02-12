'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group(() => {
  Route.post('teachers', 'TeacherController.store')
  Route.get('teachers', 'TeacherController.index')
  Route.get('teachers/:id', 'TeacherController.show')
  Route.put('teachers/:id', 'TeacherController.update')
  Route.delete('teachers/:id', 'TeacherController.delete')
}).prefix('api/v1')
