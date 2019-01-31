
exports.up = (knex) => {
  return knex.schema.createTable("death",(table)=>{
    table.increments()
    table.string("alias").notNullable().defaultsTo("player")
    table.specificType('death_array', 'text ARRAY')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable("death")
}
