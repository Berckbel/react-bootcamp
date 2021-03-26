const supertest = require('supertest')
const { app } = require('../index')
const api = supertest(app)

const initialNotes = [
  {
    content: 'Aprendiendo FullStack JS con midudev',
    important: true,
    date: new Date()
  },
  {
    content: 'Siguemem en @berckbel.tube',
    important: true,
    date: new Date()
  }
]

const getAllContentsFromNotes = async () => {
  const response = await api.get('/api/notes')
  return {
    contents: response.body.map(note => note.content),
    response
  }
}

module.exports = {
  initialNotes,
  api,
  getAllContentsFromNotes
}
