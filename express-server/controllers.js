const list = {
  Todos: []
};

module.exports = {
  fetch: (req, res) => {
    let listName = req.query.listName;
    if (listName in list) {
      res.json(list[listName]);
    } else {
      res.status(404).send('List not found');
    }
  },

  post: (req, res) => {
    let listName = req.body.listName;
    let todo = req.body.todo;
    list[listName].push(todo);
    res.status(201).send('post success');
  },

  delete: (req, res) => {
    let listName = req.query.listName;
    let index = req.query.index;
    list[listName].splice(index, 1);
    res.status(202).send('delete success');
  }
};
