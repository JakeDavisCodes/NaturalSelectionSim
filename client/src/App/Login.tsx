import axios from 'axios';
import React from 'react';

import SHA256 from 'crypto-js/sha256';

function Display ({ user, setUser }) {
  if (user) return null;

  const [username, setUsername] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [hash, setHash] = React.useState('');

  console.log(username, pwd, hash)

  const login = () => {
    if (username.length > 5 && pwd.length > 5) {
      axios({
        method: 'GET',
        url: `/user/${username}/${hash}`
      })
        .then((data) => {
          console.log('data.data', data.data)
          if (data.data.length) {
            setUser(username)
            const s_id = Math.floor(Math.random() * 10000000);
            axios({
              method: 'POST',
              url: '/session',
              data: {
                username,
                s_id,
              },
            })
            console.log(`; s_id=${s_id}`)
            document.cookie = `s_id=${s_id}`
            console.log(document.cookie)
          } else {
            alert('User does not exist')
          }
        })
        .catch((err) => console.error(err))
    } else {
      alert('Please enter this info below: \n\n Password with at least 6 characters \n Username with at least 6 characters')
    }
  }
  const signup = () => {
    if (username.length > 5 && pwd.length > 5) {
      axios({
        method: 'post',
        url: `/user`,
        data: {
          username,
          hash,
        }
      })
        .then(() => {
          setUser(username)
          const s_id = Math.floor(Math.random() * 10000000);
          axios({
            method: 'POST',
            url: '/session',
            data: {
              username,
              s_id,
            },
          })
          document.cookie += `; s_id=${s_id}`
        })
        .catch((err) => console.error(err))
    } else {
      alert('Please enter this info below: \n\n Password with at least 6 characters \n Username with at least 6 characters')
    }
  }

  return (
    <div id="Login">
      <div className="login inputs">
        <input placeholder="Username" type="text" className="login" onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder="Password" type="password" className="login" onChange={(e) => {setPwd(e.target.value); setHash(SHA256(e.target.value).toString())}}></input>
      </div>
      <div className="login buttons">
        <button className="login" onClick={login} >Log In</button>
        <button className="login" onClick={signup} >Sign Up</button>
      </div>
    </div>
  );
};

export default Display;
