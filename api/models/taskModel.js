/**
 * @file JSDocによってドキュメント化されるか試すJS
 * 1つめ
 */

/**
 * @namespace
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 各データがどのような構成なるかを表す
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the task',
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Tasks', TaskSchema);
