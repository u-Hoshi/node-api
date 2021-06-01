var mongoose = require('mongoose');
Task = mongoose.model('Tasks');

// 全てのタスクを取得する
exports.all_tasks = function (req, res) {
  Task,
    find({}, function (err, task) {
      if (err) res.send(err);
      res.json(task);
    });
};

// 新しいタスクを作成する
exports.create_task = function (req, res) {
  var new_task = new Task(req.body);
  new_task.save(function (err, task) {
    if (err) res.send(err);
    res.json;
  });
};

// 特定のタスクを取得する
exports.load_task = function (req, res) {
  Task.findById(req.params.tskId, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

// 特定のタスクを削除する
exports.delete_task = function (req, res) {
  Task.remove(
    {
      _id: req.params.taskId,
    },
    function (err, task) {
      if (err) res.send(err);
      res.json({ message: 'Task successfully deleted' });
    }
  );
};
