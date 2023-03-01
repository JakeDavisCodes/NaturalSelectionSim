import axios from 'axios';
import React from 'react';

function Display ({ user, setUser }) {
  if (user) return null;

  const [username, setUsername] = React.useState('');
  const [hash, setHash] = React.useState('');

  const login = () => {
    if (username.length > 5 && hash > 5) {
      axios({
        method: 'GET',
        url: `/user/:username/:hash`
      })
        .then((data) => {
          if (data.data) {
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
          } else {
            alert('User does not exist')
          }
        })
        .catch((err) => console.error(err))
    } else {
      alert('Please enter this info below: \n\n Password with at least 6 characters \n Username with at least 6 characters')
    }
  }

  return (
    <div id="Login">

    </div>
  );
};

export default Display;
