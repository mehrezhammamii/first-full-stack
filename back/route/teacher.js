const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllTeacher, addTeacher, getOneTeacher,update, deleteById} = require('../controllers/teacher');

/// teacherS ROUTES ///

//GET request to fetch all teachers. NOTE This must come before route for id.
router.get('/getAll', getAllTeacher);
// GET request for one teacher.
router.get('/:id', getOneTeacher);
// POST request for creating a teacher.
router.post('/add', addTeacher);
// DELETE request for deleting a teacher
router.delete('/:id',deleteById);
//UPDATE request for updating a teacher
router.put('/:id',update);

module.exports = router;