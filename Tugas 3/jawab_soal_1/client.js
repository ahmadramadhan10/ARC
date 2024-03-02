const axios = require('axios');

axios.post('http://localhost:3000/', {
    nama : 'Ahmad',
    NIM : '13222110'
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
