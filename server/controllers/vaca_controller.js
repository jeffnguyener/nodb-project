let events = [
    { title: 'Secure luggage on roof rack', id: 1 },
    { title: 'Make sure lug nuts are tight', id: 2 },
    { title: 'Make sure pets are inside the car', id: 3 }
]

let id = 1;
id += events.length;

module.exports = {
    getEvent: (req, res) => {
        res.status(200).send(events)
    },

    getEventById: (req, res) => {
        const findId = events.filter((findId) => {
            return findId.id === +req.params.id
        })
        res.status(200).send(findId[0])
    },

    createEvent: (req, res) => {
        let newEvent = {
            title: req.body.title,
            id: id
        }
        events = [...events, newEvent]
        id++
        res.status(200).send(events)
    },

    updateEvent: (req, res) => {
        const { id } = req.params
        const { title } = req.body
        let updatedEvent = {
            title: title,
            id: +id
        }
        for (let i = 0; i < events.length; i++) {
            if (events[i].id === +id) {
                events[i] = updatedEvent
            }
        }
        res.status(200).send(events)
    },

    deleteEvent: (req, res) => {
        const { id } = req.params;
        events = events.filter((events) => events.id !== +id)
        res.status(200).send(events)
    }
}