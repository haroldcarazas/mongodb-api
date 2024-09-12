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
}

export default UserController
