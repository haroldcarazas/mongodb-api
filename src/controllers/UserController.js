import User from '../models/User.js'

class UserController {
  static async index (req, res) {
    try {
      const users = await User.find().select('-password')
      res.json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async getById (req, res) {
    try {
      const { id } = req.params
      const user = await User.findById(id)

      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })

      res.json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default UserController
