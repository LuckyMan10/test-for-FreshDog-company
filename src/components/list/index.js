import React from 'react';
import { ListItem } from "./listItem";

const List = ({ data = [] }) => {

    function onRemove() {
        console.log('kiss me');
    }

    return (
        <div className="list">
            {data.map((item) => <ListItem onRemove={onRemove} name={item.name} key={item.id}/> )}
        </div>
    )
}

export default List;