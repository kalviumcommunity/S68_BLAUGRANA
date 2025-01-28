
const express = require('express');
const router = require('./router/router');

const app = express();


const PORT = 9090;


app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/ping', router)
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
