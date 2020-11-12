import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WheelsController {
  public async index ({}: HttpContextContract) {
    return 'Get index Wheel'
  }

  public async create ({}: HttpContextContract) {
    return 'Create new wheel'
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
    return 'Get id wheel'
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
    return 'Update id wheel'
  }

  public async destroy ({}: HttpContextContract) {
    return 'Delete wheel'
  }
}
