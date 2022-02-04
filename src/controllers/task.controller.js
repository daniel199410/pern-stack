const getTasks = async (req, res) => {
	res.send('Getting tasks');
};

const getTask = async (req, res) => res.send('Retrieving a task');

const createTask = async  (req, res) => res.send('Creating a list of tasks');

const deleteTask = async (req, res) => res.send('Deleting a list of tasks');

const updateTask = async (req, res) => res.send('Updating a list of tasks');

module.exports = {
	getTasks,
	getTask,
	createTask,
	deleteTask,
	updateTask,
}
