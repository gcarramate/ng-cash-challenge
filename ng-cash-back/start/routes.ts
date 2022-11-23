/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/dashboard', async ({ auth }) => {
  await auth.use('web').authenticate()
  return { hello: 'world' }
})

Route.post('login', async ({ auth, request, response }) => {
  const username = request.input('username')
  const password = request.input('password')

  try {
    await auth.use('web').attempt(username, password)
    response.redirect('/dashboard')
  } catch {
    return response.badRequest('Invalid credentials')
  }
})

Route.resource('users', 'UsersController')
