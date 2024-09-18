import { Router } from 'express'
import ExamController from '../controllers/ExamController.js'

const router = Router()

router.get('/:id', ExamController.find)
router.get('/curso/:id', ExamController.getByCurso)

export default router
