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
router.post('/post', taskRouteHandler.addTask);
router.put('/put', taskRouteHandler.addTask);

router.delete('/deleteTask/:taskId', taskRouteHandler.deleteTask)

module.exports = router;