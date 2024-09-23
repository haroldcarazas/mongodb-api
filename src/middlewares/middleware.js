import { Types } from 'mongoose'
import { ALLOWED_ORIGINS } from '../config/config.js'

export const validateID = (req, res, next) => {
  try {
    const { id } = req.params
    if (!id) return res.status(400).json({ message: 'Debe proporcionar un ID' })

    if (!Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'ID inválido' })

    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const validateCORS = (req, res, next) => {
  try {
    const { origin } = req.headers

    if (ALLOWED_ORIGINS.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin || '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      next()
    } else {
      res.status(401).json({ message: 'Prohibido por CORS' })
    }
  } catch (error) {
    res.status(401).json({ messsage: error.message })
  }
}

export const handleErrors = (err, req, res, next) => {
  if (err) return res.status(500).json({ message: err.message })
  next()
}
