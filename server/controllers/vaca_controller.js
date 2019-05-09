let events = [
    { title: 'Hawaii', id: 1 },
    { title: 'Alaska', id: 2 }
]

module.exports = {
    getEvent: (req, res) => {
        res.status(200).send(events)
    },
    getEventByTitle: (req, res) => {
        const findTitle = events.filter((findEvent) => {
            return findEvent.title === +req.params.title
        })
        res.status(200).send(findTitle[0])
    },
    getEventById: (req, res) => {
        const findId = events.filter((findEvent) => {
            return findEvent.id === +req.params.id
        })
        res.status(200).send(findId[0])
    },
    createEvent: (req, res) => {
        let id = events.[events.length - 1].id++
        const newEvent = {
            title: req.body.title,
            id: id
        }
        events = [...events, newEvent]
        res.status(200).send(events)
    },
}