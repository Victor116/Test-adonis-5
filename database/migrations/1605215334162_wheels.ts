import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Wheels extends BaseSchema {
  protected tableName = 'wheels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('path_image').notNullable()

      // FK
      table.integer('maker_tire').references('id').inTable('maker_tire')

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
