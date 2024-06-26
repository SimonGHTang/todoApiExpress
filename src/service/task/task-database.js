const taskDatabase = [
	{ 
		taskId :"abcde",
		taskDescription: "description"
	},
	{
		taskId: "newId",
		taskDescription:"newDescription"
	}
]

const addTask = (task) => taskDatabase.push(task);
const updateTask = (task) => taskDatabase.splice(getTaskIndex(task.taskId), 1, task);
const getTaskIndex = (taskId) => taskDatabase.indexOf(getTaskByTaskId(taskId));

module.exports = taskDatabase;