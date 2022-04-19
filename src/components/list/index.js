import React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem } from './listItem';

const List = ({ data = [], removeListItem }) => {
    const dispatch = useDispatch();

    function onRemove(e) {
        const { id } = e.target;
        if (id) dispatch(removeListItem(id));
    }

    return (
        <div onClick={onRemove} className="list">
            {data.map((item) => <ListItem data={item} key={item.id}/> )}
        </div>
    )
}

export { List }