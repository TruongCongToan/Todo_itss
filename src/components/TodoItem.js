import React from 'react';

function TodoItem({ item, handleCheck }) {
  return (
    <label className="panel-block">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.key)}
        defaultChecked={item.done}
      />
      <span className={item.done ? 'has-text-grey-light' : null}>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;
