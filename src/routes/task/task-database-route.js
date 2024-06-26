const express = require('express');
const router = express.Router();
const taskRouteHandler = require('./task-route-handler.js');

const timeLog = (req, res, next) => {
	//runs every time this router is called
  console.log('Time: ', Date.now());
  next();
}
router.use(timeLog);

router.get('/get', taskRouteHandler.getTaskList);
router.get('/get/:taskId', taskRouteHandler.getTaskByTaskId);
router.post('/post', (req, res) => {
  res.send('About birds');
});
router.put('/put', (req, res) => {
	res.send('database task added');
});

router.delete('/deleteTask/:taskId', (req, res) => {
	deleteTask(req.params.taskId);
	res.send('task deleted from database');
})

module.exports = router;