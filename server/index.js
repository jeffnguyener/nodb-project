const express = require('express')
const app = express()
const vc = require('./controllers/vaca_controller')

app.use(express.json())

app.get('/api/events', vc.getEvent)
app.get('/api/events', vc.getEventByTitle)
app.post('/api/events', vc.createEvent)


const PORT = 3555
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)) 