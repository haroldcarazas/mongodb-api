import Course from '../models/Course.js'
import Exam from '../models/Exam.js'

class ExamController {
  static async find (req, res) {
    try {
      const { id } = req.params
      const examen = await Exam.findById(id).populate('questions', '-answer')
      if (!examen) return res.status(404).json({ message: 'Examen no encontrado' })

      res.json(examen)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async getByCurso (req, res) {
    try {
      const { id } = req.params

      const curso = await Course.findById(id)
      if (!curso) return res.status(404).json({ message: 'Curso no encontrado' })

      const examenes = await Exam.find({ course: id }).select('-questions').populate('course')
      res.json(examenes)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default ExamController
