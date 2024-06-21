const express = require('express')
const app = express()
const port = 3000
const readStorage = require('./readStorage')
const writeStorage = require('./writeStorage')

app.get('/', (req, res) => {
  res.send(readStorage())
})

app.post('/', (req, res) => {
	let data = writeStorage();
  res.send(`json updated ${data}`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})