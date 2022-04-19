import React from 'react';

const ListItem = ({ data }) => {
    return (
        <div className="list__item">
            <p>{data.name}</p>
            <button id={data.id}>Удалить</button>
        </div>
    )
}

export { ListItem }