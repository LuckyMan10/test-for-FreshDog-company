import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setListItem } from '../../redux/actions';

const AddForm = ({ listData }) => {
    const dispatch = useDispatch();
    const [noteText, setNoteText] = useState();

    function onSubmit() {

    }

    return (
        <div className="list__add-form">
            <input placeholder="Введите текст новой заметки" />
            <button onClick={onSubmit}>Добавить</button>
        </div>
    )
}

export { AddForm }