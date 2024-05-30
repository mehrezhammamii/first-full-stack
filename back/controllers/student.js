const student = require('../database/models/student');

module.exports = {
  // Method to fetch all students from the blog database.
  getAllStudent: function(req, res) {
    student.getAll(function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  },

  // Method to add a student to the database via the respective model function.
  addStudent: function(req, res) {
    const newStudent = {
      name: req.body.name,
      age: req.body.age
    };
    student.add(newStudent, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ message: 'student added successfully!', studentId: results.insertId });
    });
  },

  // Method to get one student by id.
  getOneStudent: function(req, res) {
    const studentId = req.params.id;
    // console.log('student ID:', StudentId); // Add this line to debug
    student.getOne(studentId, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  },

  deleteById : function(req,res){
    const studentId=req.params.id;
    student.deleteById(studentId,function(err,results){
      if(err){
        return res.status(500).send(err);
      }

      res.json(results)
    })
  }, 
  update: function(req, res) {
        const studentId = req.params.id;
        const name = req.body.name;
        const age = req.body.age;
        const image_link=req.body.image_link
        console.log('Received studentId:', studentId);

        // Validate that all required parameters are provided
        if (!name  || !age || !image_link) {
            return res.status(400).send({ error: 'Name and age are required' });
        }

        // Call the update function from the model with correct parameters
        student.update(studentId, name, age, image_link,function(err, results) {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(results);
        });
    }

};
