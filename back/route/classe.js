const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllClasse, addClasse, getOneClasse,update, deleteById} = require('../controllers/classe');

/// classeS ROUTES ///

//GET request to fetch all classes. NOTE This must come before route for id.
router.get('/getAll', getAllClasse);
// GET request for one Classe.
router.get('/:id', getOneClasse);
// POST request for creating a Classe.
router.post('/add', addClasse);
// DELETE request for deleting a Classe
router.delete('/:id',deleteById);
//UPDATE request for updating a Classe
router.put('/:id',update);

module.exports = router;