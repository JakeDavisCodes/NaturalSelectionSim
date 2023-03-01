const { Login, Session } = require('./db.js');

const model = {
  getSession: (s_id) => {
    return Session.find({ _id: s_id })
      .catch((err) => console.error(err))
  },
  createSession: ({s_id, username}) => {
    return Session.create({ _id: s_id, username })
      .then((data) => console.log('good', data))
      .catch((err) => console.error(err))
  },
  getUser: (username, hash) => {
    return Login.find({ username, hash })
      .catch((err) => console.error(err))
  },
  createUser: ({ username, hash }) => {
    return Login.create({ hash, username })
      .catch((err) => console.error(err))
  }
};

module.exports = model;
