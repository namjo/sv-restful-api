'use strict'

const Model = use('Model')

class Teacher extends Model {
  static get table() {
    return 'teachers'
  }

  static get primaryKey() {
    return 'id'
  }
}

module.exports = Teacher
