const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/natSimUsers')

db
  .then(db => console.log(`Connected to Mongo`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo`);
    console.log(err);
  });

const session = mongoose.Schema({
  _id: Number,
  username: String,
})
const login = mongoose.Schema({
  username: String,
  hash: String,
})

const Session = mongoose.model('Session', session);
const Login = mongoose.model('Login', login);

module.exports = {
  db,
  Session,
  Login,
};
