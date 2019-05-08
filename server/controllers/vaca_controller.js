let events = [
    { title: 'new mexico', day: '1'}
]

module.exports = {
    getEvent: (req, res) => {
        res.status(200).send(events)
    },
    createEvent: (req, res) => {
        res.status(200).send(events)
    },

}