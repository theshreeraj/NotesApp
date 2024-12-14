const mongoose = require('mongoose');
const Note = require('../models/notesSchema');

// Create a new note
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve notes' });
  }
};

// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save()
    res.status(201).json({ message: 'Note created successfully', note: savedNote });
  }
    catch (error) {
    res.status(500).json({ error: 'Failed to create note' });
  }
};

module.exports = {
  getAllNotes,
  createNote,
};