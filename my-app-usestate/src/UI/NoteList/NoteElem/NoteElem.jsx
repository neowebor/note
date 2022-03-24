import React, {useRef, useState} from 'react';
import classes from "../NoteList.module.css";
import edit from '../../../assets/images/pencil.png'

const NoteElem = ({title, elem, note, createNote}) => {
    // let textareaValue = useRef(null);
    const [text, setText] = useState('');
    const [textareaText, setTextareaValue] = useState('');

    const printText = (e) => {
        if(e.code === 'Enter' || e.type === 'click') {
            setText(textareaText)
        }
    }

    const removeNote = () => {
        createNote(note.filter(n => n.id !== elem.id))
    }


    const editNote = () => {
        let value = text;
        setText('')
    }

    // value={text} onChange={(e) => setText(e.target.value)}

    return (
        <div className={`ui-element ${classes.wrap}`}>
            <div className={classes.title}>{title}</div>
            <div onClick={removeNote} className={classes.icon_delete}/>
            <img src={edit} alt="edit" onClick={editNote}/>
            {
                text !== ''
                    ? <div>
                        <div className={classes.block_text}>{text}</div>
                    </div>
                    : <div>
                        <textarea onKeyDown={(e) => printText(e)} value={textareaText} onChange={(e) => setTextareaValue(e.target.value)} className={classes.textarea} placeholder="Max length - 200 symbols"/>
                        <button onClick={(e) => printText(e)}>Добавить</button>
                    </div>
            }

        </div>
    );
};

export default NoteElem;