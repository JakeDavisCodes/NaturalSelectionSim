const { Login, Session } = require('./db.js');

const model = {
  getSession: (s_id) => {
    return Session.findById(s_id);
  }
};

module.exports = model;
