import React, { useState, useEffect } from "react";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/notes/")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  console.log(notes);

  return (
    <div>
      <h1>All Notes</h1>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
