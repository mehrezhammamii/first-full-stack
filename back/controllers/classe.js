const classe = require('../database/models/classe');

module.exports = {
  // Method to fetch all classes from the blog database.
  getAllClasse: function(req, res) {
    classe.getAll(function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      console.log('Classes:', results); // Log the results array
      res.json(results);
    });
  },

  // Method to add a classe to the database via the respective model function.
  addClasse: function(req, res) {
    const newClasse = {
      name: req.body.name,
      subject: req.body.age,
      image_link : req.body.image_link
    };
    classe.add(newClasse, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ message: 'classe added successfully!', classeId: results.insertId });
    });
  },

  // Method to get one classe by id.
  getOneClasse: function(req, res) {
    const classeId = req.params.id;
    // console.log('classe ID:', ClasseId); // Add this line to debug
    classe.getOne(classeId, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  },

  deleteById : function(req,res){
    const classeId=req.params.id;
    classe.deleteById(classeId,function(err,results){
      if(err){
        return res.status(500).send(err);
      }

      res.json(results)
    })
  }, 
  update: function(req, res) {
        const classeId = req.params.id;
        const name = req.body.name;
        const subject = req.body.subject;
        const image_link = req.body.image_link;
        console.log('Received classeId:', classeId);

        // Validate that all required parameters are provided
        if (!name  || !subject || !image_link) {
            return res.status(400).send({ error: 'Name ,subject and image link are required' });
        }

        // Call the update function from the model with correct parameters
        classe.update(classeId, name, subject,image_link, function(err, results) {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(results);
        });
    }

};
