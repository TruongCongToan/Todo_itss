import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';
import useStorage from '../hooks/storage';
import { getKey } from '../lib/util';

function Todo() {
  const [items, putItems, clearItems] = useStorage();

  const [filterMode, setFilterMode] = useState('ALL');

  const displayItems = items.filter((item) => {
    if (filterMode === 'ALL') return true;
    if (filterMode === 'TODO') return !item.done;
    if (filterMode === 'DONE') return item.done;
  });
  const handleCheck = (itemKey) => {
    const newItems = items.map((item) => {
      if (item.key === itemKey) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  };
  const handleAddNewTodo = (newTodoText) => {
    const newItems = [
      ...items,
      { key: getKey(), text: newTodoText, done: false },
    ];
    putItems(newItems);
  };
  const handleFilter = (keyFilterMode) => {
    setFilterMode(keyFilterMode);
  };

  const handleDeleteTodo = () => {
    clearItems();
  };

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <Input handleAddNewTodo={handleAddNewTodo} />
      <Filter filterMode={filterMode} handleFilter={handleFilter} />
      {displayItems.map((item) => (
        <TodoItem key={item.key} item={item} handleCheck={handleCheck} />
      ))}
      <div className="panel-block">{displayItems.length} items</div>
      <button
        className="button is-light is-fullwidth"
        onClick={handleDeleteTodo}
      >
        全てのToDoを削除
      </button>
    </div>
  );
}
export default Todo;