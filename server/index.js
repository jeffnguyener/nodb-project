const express = require('express')
const app = express()
const vc = require('./controllers/vaca_controller')

app.use(express.json())

app.get('/api/events', vc.getEvent)
// app.get('/api/event/:title', vc.getEventByTitle)
// app.get('/api/events/:id', vc.getEventById)
app.post('/api/events', vc.createEvent)
app.put('/api/event/:id', vc.updateEvent)
app.delete('/api/events/:id', vc.deleteEvent)


const PORT = 3555
app.listen(PORT, () => console.log(`Cruising on port....${PORT}`)) 