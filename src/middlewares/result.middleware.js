import Exam from '../models/Exam.js'
import User from '../models/User.js'

export const validateExamAndUser = async (req, res, next) => {
  try {
    const { examId, userId } = req.query

    if (!examId || !userId) {
      return res.status(400).json({ error: 'Se requieren examId y userId' })
    }

    const exam = await Exam.findById(examId)
    if (!exam) return res.status(404).json({ message: 'Examen no encontrado' })

    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })

    req.exam = exam
    req.user = user

    next()
  } catch (error) {
    res.status(500).json({ error: 'Error en la validación del examen o usuario' })
  }
}
