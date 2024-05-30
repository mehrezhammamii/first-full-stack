const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllStudent, addStudent, getOneStudent,update, deleteById} = require('../controllers/student');

/// studentS ROUTES ///

//GET request to fetch all students. NOTE This must come before route for id.
router.get('/getAll', getAllStudent);
// GET request for one student.
router.get('/:id', getOneStudent);
// POST request for creating a student.
router.post('/add', addStudent);
// DELETE request for deleting a student
router.delete('/:id',deleteById);
//UPDATE request for updating a student
router.put('/:id',update);

module.exports = router;