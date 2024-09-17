import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import { validateJWT } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/login', AuthController.login)
router.get('/me', validateJWT, AuthController.me)

export default router
