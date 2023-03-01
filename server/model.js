const { Login, Session } = require('./db.js');

const model = {
  getSession: (s_id) => {
    return Session.find({ _id: 100 })
      .catch((err) => console.error(err))
  }
};

module.exports = model;
