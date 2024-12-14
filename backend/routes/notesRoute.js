const notesController = require('../controllers/notesController');
const express = require('express');
const router = express.Router();

router.get('/notes', notesController.getAllNotes);
router.post('/notes', notesController.createNote);


module.exports = router;