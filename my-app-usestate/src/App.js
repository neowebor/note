import React, {useEffect, useRef, useState} from 'react';
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import NoteList from "./UI/NoteList/NoteList";

const App = () => {
    let inputRef = useRef(null)
    const [note, createNote] = useState([])

    let addNewNote = (e) => {
        if(inputRef.current.value === '') return;
        if(e.code === 'Enter' || e.type === 'click') {
            createNote([
                ...note,
                {id: Date.now(), title: inputRef.current.value},
            ])
            inputRef.current.value = '';
        }
    }

    return (
        <div className="container">
            <div className="wrap">
                <MyInput ref={inputRef} onKeyDown={(e) => addNewNote(e)}/>
                <MyButton onClick={(e) => addNewNote(e)}>Add new note</MyButton>
            </div>
            <div>
                <NoteList note={note} createNote={createNote}/>
            </div>
        </div>
    );
};

export default App;