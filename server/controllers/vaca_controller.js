let events = [
    { title: 'Hawaii', id: 1 },
    { title: 'Alaska', id: 2 }
]

let id = 1;
id += events.length;

module.exports = {
    getEvent: (req, res) => {
        res.status(200).send(events)
    },

    getEventByTitle: (req, res) => {
        const findTitle = events.filter((findTitle) => {
            return findTitle.title === req.params.title
        })
        res.status(200).send(findTitle)
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
        const {id} = req.params
        const {title}= req.body
        let updatedEvent = {
            title: title
            
        }
        let myEvent = events.find(element => {
            return element.id === +id
        })
        myEvent.title = updatedEvent.title
        res.status(200).send(events)
    },

    deleteEvent: (req, res) => {
        const { id } = req.params;
        events = events.filter((events) => events.id !== +id)
        res.status(200).send(events)
    }
}