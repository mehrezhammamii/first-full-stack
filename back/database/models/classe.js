// Import the database connection
const connection = require('../index.js');

module.exports = {
  // A function that fetches all classes
  getAll: function(callback) {
    const sql = 'SELECT * FROM `classe`';
    connection.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },
  
  // A function that retrieves one classe record based on the provided id
  getOne: function(idclasse, callback) {
    const sql = 'SELECT * FROM `classe` WHERE idclasse = ?';
    console.log('Executing SQL:', sql, 'with ID:', idclasse); // Add this line to debug
    connection.query(sql, [idclasse], function (error, results) {
      callback(error, results);
    });
  },
  
  // A function that can be used to insert a classe into the database
  add: function(classe, callback) {
    const sql = 'INSERT INTO `classe` (name, subject,image_link) VALUES ( ?, ?,?)';
    connection.query(sql, [classe.name, classe.subject,classe.image_link], function (error, results, fields) {
      callback(error, results);
    });
  },
  deleteById:function (idclasse,callback) {
 const sql='DELETE FROM `classe` WHERE (idclasse=?)'
 connection.query(sql,[idclasse],function(error,results,fields){callback(error,results);

 }) 
  },
  update: function(idclasse,name, subject,image_link, callback) {
    const sql = 'UPDATE `classe` SET name = ?, subject = ?, image_link = ? WHERE idclasse = ?';
    console.log('Executing SQL:', sql, 'with parameters:', [name, subject,image_link, idclasse]); // Add this line to debug

    connection.query(sql, [name, subject,image_link, idclasse], function(error, results, fields) {
      console.log('SQL Execution Results:', results); // Add this line to debug

        callback(error, results);
    });
}
};

