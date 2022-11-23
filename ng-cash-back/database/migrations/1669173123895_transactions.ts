import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('debited_account_id').references('id').inTable('accounts')
      table.integer('credited_account_id').references('id').inTable('accounts')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('debited_account_id')
      table.dropColumn('credited_account_id')
    })
  }
}
