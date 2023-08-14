import express from 'express'

const app = express()
const PORT = 1461

app
    .use(express.json())
    .get('/', (req, res) => {
        res.send('Mr. Chedda')
    })
    .listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    )