const express = require('express');
const cors = require('cors');
const taskDatabaseRoute = require('./routes/task/task-database-route.js');
const app = express();
const port = 3000;
const corOptions = { 
	origin: "http://localhost:5173/",
	methods: ['GET', 'PUT', 'POST', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization'],

}

app.use(cors(corOptions));
app.use(express.json());
app.use('/taskDatabase', taskDatabaseRoute);

app.get('/', (req, res) => {
  res.send("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});