import React from 'react'

const ListItems_issue = () => {

    const items = [
        {id:1, text:"Item 1"},
        {id:2, text: "Item 2"}
    ];

    const listItems = items.map((item, index)=><li key={item.id}>{item.text}</li>)
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default ListItems_issue