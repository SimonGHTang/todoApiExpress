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
const updateTask = (task) => taskDatabase.splice(getTaskIndex(task.taskId), 1, task);

module.exports = taskDatabase;