moudule.exports = function (app) {
  var taslList = require('../controllers/taskController');

  app.route('/task').get(taskList.all_tasks).post(taskList.create_task);

  app
    .route('/tasks/:taskId')
    .get(taslList.load_task)
    .put(taskList.update_task)
    .delete(taskList.delete_task);
};
