import { Router } from 'express'
import ResultController from '../controllers/ResultController.js'
import uploadVideo from '../config/multer/uploadVideo.js'
import { handleErrors } from '../middlewares/middleware.js'
import { validateExamAndUser } from '../middlewares/result.middleware.js'

const router = Router()

router.post('/', validateExamAndUser, uploadVideo.single('video'), ResultController.store, handleErrors)

export default router
