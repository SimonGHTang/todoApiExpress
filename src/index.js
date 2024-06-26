const express = require('express');
const taskDatabaseRoute = require('./routes/task/task-database-route.js');
const app = express();
const port = 3000;

app.use('/taskDatabase', taskDatabaseRoute)

app.get('/', (req, res) => {
  res.send("home");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})