let events = [
    { title: 'new mexico'}
]

module.exports = {
    getEvent: (req, res) => {
        res.status(200).send(events)
    },
    createEvent: (req, res) => {
        
        res.status(200).send(events)
    },
    findEventByTitle: (req, res) => {
        const findTitle = events.filter((findEvent) =>{
            return findEvent.title === +req.params.title
        })
        res.status(200).send(findTitle[0])
    },
}