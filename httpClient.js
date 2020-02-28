const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res.data));