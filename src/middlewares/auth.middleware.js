import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config.js'
import User from '../models/User.js'

export const validateJWT = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    const decoded = jwt.verify(authorization, SECRET_KEY)

    const user = await User.findById(decoded?.userId)
    if (!user) return res.status(400).json({ message: 'El token no está asociado a ningún usuario' })

    req.user = user
    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
