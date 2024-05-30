const db = {};

db.student = require('./student')
db.teacher = require('./teacher')
db.classe = require('./classe')

module.exports = db;