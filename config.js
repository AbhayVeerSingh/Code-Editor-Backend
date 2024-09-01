module.exports = {
  user: {
    name: {
      length: 5
    },
    password: {
      saltRounds: 10,
      length: 8
    }
  },
  room: {
    name: {
      length: 5
    },
    description: {
      length: 5
    }
  },
  jwt: {
    secret: 'secret'
  },
  port: 4000,
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:3001'
    ]
  },
  socket:{
    url:      'http://localhost:3000'
  }
}
