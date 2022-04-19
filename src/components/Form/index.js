import React, { useState } from 'react';
import { useDispatch } from "react-redux";

const AddForm = ({ data, setListItem }) => {
    const dispatch = useDispatch();
    const [noteText, setNoteText] = useState('');

    function onSubmit(e) {
        if (e) e.preventDefault();
        let maxIdObject;
        if (data.length) {
            maxIdObject = data.reduce((acc, item) => item.id > acc.id ? item : acc);
        } else {
            maxIdObject = { id: 0 }
        }
        const submitData = {
            id: maxIdObject.id + 1,
            name: noteText
        }
        if (noteText && noteText.replace(/\s/g, '')) {
            setNoteText('');
            dispatch(setListItem(submitData));
        }
    }

    function onChange(e) {
        const { value } = e.target;
        if (value) setNoteText(value);
    }

    return (
        <div className="list__add-form">
            <input onChange={onChange} placeholder="Введите текст новой заметки" value={noteText}/>
            <button onClick={onSubmit}>Добавить</button>
        </div>
    )
}

export { AddForm }