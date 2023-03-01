const model = require('./model.js')

const controler = {
  getSession: (req, res) => {
    if (!req.params.s_id) res.status(400).send({ "s_id":"required" });
    else {
      model.getSession(req.params.s_id)
        .then((data) => {
          console.log(data)
          res.status(200).send(data)
        })
    }
  }
}

module.exports = controler;
