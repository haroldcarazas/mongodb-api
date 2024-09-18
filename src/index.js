import express from 'express'
import { DB_URL, PORT } from './config/config.js'
import { connect } from 'mongoose'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import examRoutes from './routes/exam.routes.js'
import { validateCORS } from './middlewares/middleware.js'

const app = express()

app.use(express.json())
app.use(validateCORS)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/exams', examRoutes)

connect(DB_URL)
  .then(() => {
    console.log('Conectado a la base de datos')
    app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))
  })
  .catch(e => console.log(e))
