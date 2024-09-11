import express from 'express'
import { DB_URL, PORT } from './config/config.js'
import { connect } from 'mongoose'

const app = express()

connect(DB_URL)
  .then(() => {
    console.log('Conectado a la base de datos')
    app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))
  })
  .catch(e => console.log(e))
