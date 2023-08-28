import express from 'express'
import { userRouter } from './routes/user.routes'
import cors from 'cors'
import path from 'path'

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const app = express()
const PORT = 1461

app
    .use(cors(corsOptions))
    .use(express.json())
    .get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
    .get('/hub', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/hub.html'))
    })
    .use('/user', userRouter)
    .listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    )