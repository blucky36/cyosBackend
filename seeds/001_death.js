
exports.seed = (knex) => {
  return knex('death').del().then(() => {
    return knex('death').insert([
      {id:1,alias:'testAlias',death_array:["death1","death2","death3"]}
    ])
  })
}
