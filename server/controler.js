const model = require('./model.js')

const controler = {
  getSession: (req, res) => {
    if (!req.params.s_id) res.status(400).send({ "s_id":"required" });
    else {
      model.getSession(req.params.s_id)
        .then((data) => {
          console.log('data', data)
          res.status(200).json(data)
        })
        .catch((err) => console.error(err))
    }
  },
  postSession: (req, res) => {
    model.createSession(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => console.error(err))
  },
  getUser: (req, res) => {
    model.getUser(req.params.username, req.params.hash)
      .then((data) => {
        console.log('getUser', data)
        res.status(200).json(data)
      })
      .catch((err) => console.error(err))
  },
  postUser: (req, res) => {
    model.createUser(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => console.error(err))
  }
}

module.exports = controler;
