import React from 'react';
import NoteElem from "./NoteElem/NoteElem";

const NoteList = ({note, createNote}) => {
    return (
        <div className="box-for-notes">
            { note.length !== 0
                ? note.map(n =>
                    <NoteElem key={n.id} elem={n} note={note} createNote={createNote} title={n.title}/>
                )
                : null
            }
        </div>
    );
};

export default NoteList;