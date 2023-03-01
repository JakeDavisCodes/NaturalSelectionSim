const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/natSimUsers')

const session = mongoose.Schema({
  username: String,
})
const login = mongoose.Schema({
  username: String,
  hash: String,
})

const Session = mongoose.model('Session', session);
const Login = mongoose.model('Login', login);

module.exports = {
  Session,
  Login,
};
