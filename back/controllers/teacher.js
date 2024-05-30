const teacher = require('../database/models/teacher');

module.exports = {
  // Method to fetch all teachers from the blog database.
  getAllTeacher: function(req, res) {
    teacher.getAll(function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  },

  // Method to add a teacher to the database via the respective model function.
  addTeacher: function(req, res) {
    const newTeacher = {
      name: req.body.name,
      age: req.body.age,
      image_link: req.body.image_link
    };
    teacher.add(newTeacher, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ message: 'teacher added successfully!', teacherId: results.insertId });
    });
  },

  // Method to get one teacher by id.
  getOneTeacher: function(req, res) {
    const teacherId = req.params.idteacher;
    // console.log('teacher ID:', teacherId); // Add this line to debug
    teacher.getOne(teacherId, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  },

  deleteById : function(req,res){
    const teacherId=req.params.idteacher;
    teacher.deleteById(teacherId,function(err,results){
      if(err){
        return res.status(500).send(err);
      }

      res.json(results)
    })
  }, 
  update: function(req, res) {
        const teacherId = req.params.id;
        const name = req.body.name;
        const age = req.body.age;
        const image_link=req.body.image_link
        console.log('Received teacherId:', teacherId);

        // Validate that all required parameters are provided
        if (!name  || !age || !image_link) {
          return res.status(400).send({ error: 'Name and age are required' });
      }


        // Call the update function from the model with correct parameters
        teacher.update(teacherId, name, age, image_link,function(err, results) {
          if (err) {
              return res.status(500).send(err);
          }
          res.json(results);
      });
    }

};
