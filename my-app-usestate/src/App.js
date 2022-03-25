import React, {useEffect, useRef, useState} from 'react';
import MyButton from "./components/shared/MyButton/MyButton";
import MyInput from "./components/shared/MyInput/MyInput";
import NoteList from "./components/Note/NoteList/NoteList";

const App = () => {
    let inputRef = useRef(null)
    const [note, createNote] = useState([])

    let addNewNote = (e) => {
        if(inputRef.current.value === '') return;
        if(e.keyCode === 13 || e.type === 'click') {
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
                <MyInput ref={inputRef} onKeyDown={addNewNote}/>
                <MyButton onClick={addNewNote}>Add new note</MyButton>
            </div>
            <div>
                <NoteList note={note} createNote={createNote}/>
            </div>
        </div>
    );
};

export default App;