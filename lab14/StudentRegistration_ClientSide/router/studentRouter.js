const express = require("express");
const studentController = require("../controller/studentController");

const router = express.Router();

router.get('/search', studentController.filterByProgram);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.delete('/:id', studentController.deleteStudent);
router.get('/', studentController.getStudents);
router.put('/:id', studentController.updateStudent);

module.exports = router;