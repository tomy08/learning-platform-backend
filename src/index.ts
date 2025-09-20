import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Pool } from 'pg'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 4000

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

pool
  .connect()
  .then(() => console.log('Conexión a la base de datos establecida'))
  .catch((err: Error) =>
    console.error('Error al conectar a la base de datos:', err)
  )

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the Learning Platform API 1234')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
