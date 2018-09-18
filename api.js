const path = require('path')
const  express = require('express')

const app = express()

const port = 5000

app.get('/api/questions', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.sendFile(path.join(__dirname, 'questions.json'))
})

app.listen(port, () => {
    console.log("Server started at http://localhost:"+port)
})



