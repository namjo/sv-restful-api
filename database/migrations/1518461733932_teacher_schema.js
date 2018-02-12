'use strict'

const Schema = use('Schema')

class TeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments()
      table.string('firstname')
      table.string('lastname')
      table.timestamps()
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = TeacherSchema
