'use strict'

const Teacher = use('App/Models/Teacher')

class TeacherController {
  async index ({response}) {
    let teachers = await Teacher.all()

    return response.json(teachers)
  }

  async show ({params, response}) {
    const teacher = await Teacher.find(params.id)

    return response.json(teacher)
  }

  async store ({request, response}) {
    const teacherInfo = request.only(['firstname', 'lastname'])

    const teacher = new Teacher()
    teacher.firstname = teacherInfo.firstname
    teacher.lastname = teacherInfo.lastname

    await teacher.save()

    return response.status(201).json(teacher)
  }

  async update ({params, request, response}) {
    const teacherInfo = request.only(['firstname', 'lastname'])

    const teacher = await Teacher.find(params.id)
    if (!teacher) {
      return response.status(404).json({data: 'Resource not found'})
    }
    teacher.firstname = teacherInfo.firstname
    teacher.lastname = teacherInfo.lastname

    await teacher.save()

    return response.status(200).json(teacher)
  }

  async delete ({params, response}) {
    const teacher = await Teacher.find(params.id)
    if (!teacher) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await teacher.delete()

    return response.status(204).json(null)
  }
}

module.exports = TeacherController
