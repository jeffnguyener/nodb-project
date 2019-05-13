let events = [
    { title: 'Secure luggage', id: 1},
    { title: 'Check tire pressure', id: 2 },
    { title: 'Make sure pets are inside the car', id: 3}
]

let id = 1;
id += events.length;

module.exports = {
    getEvent: (req, res) => {
        res.status(200).send(events)
    },

    // getEventByTitle: (req, res) => {
    //     const findTitle = events.filter((findTitle) => {
    //         return findTitle.title === req.params.title
    //     })
    //     res.status(200).send(findTitle)
    // },

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
            title: title,
            id: id
        }
        for(let i = 0; i < events.length; i++){
            if(events[i].id === +id){
                events[i]= updatedEvent
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