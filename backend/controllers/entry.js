const add = async (req, res) => {
	req.send('Add');
};

const remove = async (req, res) => {
	req.send('Remove');
};

module.exports = { add, remove };
