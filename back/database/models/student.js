// Import the database connection
const connection = require('../index.js');

module.exports = {
  // A function that fetches all students
  getAll: function(callback) {
    const sql = 'SELECT * FROM `student`';
    connection.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },
  
  // A function that retrieves one student record based on the provided id
  getOne: function(idstudent, callback) {
    const sql = 'SELECT * FROM `student` WHERE idstudent = ?';
    console.log('Executing SQL:', sql, 'with ID:', idstudent); // Add this line to debug
    connection.query(sql, [idstudent], function (error, results) {
      callback(error, results);
    });
  },
  
  // A function that can be used to insert a student into the database
  add: function(student, callback) {
    const sql = 'INSERT INTO `student` (name, age,image_link) VALUES ( ?, ?,?)';
    connection.query(sql, [student.name, student.age,student.image_link], function (error, results, fields) {
      callback(error, results);
    });
  },
  deleteById:function (idstudent,callback) {
 const sql='DELETE FROM `student` WHERE (idstudent=?)'
 connection.query(sql,[idstudent],function(error,results,fields){callback(error,results);

 }) 
  },
  update: function(idstudent, name, age, imageLink, callback) {
    const sql = 'UPDATE `student` SET name = ?, age = ?, image_link = ? WHERE idstudent = ?';
    console.log('Executing SQL:', sql, 'with parameters:', [name, age, imageLink, idstudent]);

    connection.query(sql, [name, age, imageLink, idstudent], function(error, results, fields) {
        console.log('SQL Execution Results:', results);
        callback(error, results);
    });
}

};

