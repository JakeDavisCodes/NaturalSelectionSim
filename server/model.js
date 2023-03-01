const { Login, Session } = require('./db.js');

const model = {
  getSession: (s_id) => {
    return Session.find({ _id: 100 })
      .catch((err) => console.error(err))
  },
  createSession: (s_id, username) => {
    return Session.create({ _id: s_id, username })
      .catch((err) => console.error(err))
  },
  getUser: ({ username, hash }) => {
    return Login.find({ username, hash })
      .catch((err) => console.error(err))
  }
};

module.exports = model;
