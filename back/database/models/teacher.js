// Import the database connection
const connection = require('../index.js');

module.exports = {
  // A function that fetches all teacher
  getAll: function(callback) {
    const sql = 'SELECT * FROM `teacher`';
    connection.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },
  
  // A function that retrieves one teacher record based on the provided id
  getOne: function(idteacher, callback) {
    const sql = 'SELECT * FROM `teacher` WHERE idteacher = ?';
    console.log('Executing SQL:', sql, 'with ID:', idteacher); // Add this line to debug
    connection.query(sql, [idteacher], function (error, results) {
      callback(error, results);
    });
  },
  
  // A function that can be used to insert a teacher into the database
  add: function(teacher, callback) {
    const sql = 'INSERT INTO `teacher` (name, age,image_link) VALUES ( ?, ?,?)';
    connection.query(sql, [teacher.name, teacher.age,teacher.image_link], function (error, results, fields) {
      callback(error, results);
    });
  },
  deleteById:function (idteacher,callback) {
 const sql='DELETE FROM `teacher` WHERE (idteacher=?)'
 connection.query(sql,[idteacher],function(error,results,fields){callback(error,results);

 }) 
  },
  update: function(idteacher,name, age,image_link, callback) {
    const sql = 'UPDATE `teacher` SET name = ?, age = ?,image_link = ? WHERE idteacher = ?';
    console.log('Executing SQL:', sql, 'with parameters:', [name, age,image_link, idteacher]); // Add this line to debug

    connection.query(sql, [name, age,image_link, idteacher], function(error, results, fields) {
      console.log('SQL Execution Results:', results); // Add this line to debug

        callback(error, results);
    });
}
};

