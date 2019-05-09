const express = require('express')
const app = express()
const vc = require('./controllers/vaca_controller')

app.use(express.json())

app.get('/api/events', vc.getEvent)
app.get('/api/event/:title', vc.getEventByTitle)
app.get('/api/events/:id', vc.getEventById)
app.post('/api/events', vc.createEvent)
app.put('/api/events/:id', vc.updateEvent)
// app.delete()


const PORT = 3555
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)) 