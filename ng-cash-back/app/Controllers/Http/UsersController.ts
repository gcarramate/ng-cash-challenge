import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ response, request }: HttpContextContract) {
    const { username, password } = request.body()
    await User.create({ username, password })
    return response.send({ message: 'success' })
  }
}
