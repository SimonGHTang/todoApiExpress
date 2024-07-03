const express = require('express');
const router = express.Router();
const taskRouteHandler = require('./task-route-handler.js');

const timeLog = (req, res, next) => {
	//runs every time this router is called
  console.log('Time: ', Date.now());
  next();
}
router.use(timeLog);

router.get('/', taskRouteHandler.getTaskList);
router.get('/:taskId', taskRouteHandler.getTaskByTaskId);
router.post('/', taskRouteHandler.postTask);
router.put('/', taskRouteHandler.putTask);
router.delete('/:taskId', taskRouteHandler.deleteTask)

module.exports = router;