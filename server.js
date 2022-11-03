const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('.'))
app.use(express.static('images'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(port, () => {
  console.log('server started at http://localhost:' + port);
});


