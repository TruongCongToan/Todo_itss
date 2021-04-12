import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';
import useStorage from '../hooks/storage';
import { getKey } from '../lib/util';

const itemArr = [
  { key: getKey(), text: '日本語の宿題', done: false },
  { key: getKey(), text: 'reactを勉強する', done: false },
  { key: getKey(), text: '明日の準備をする', done: false },
];

function Todo() {
  const [items, putItems] = React.useState(itemArr);

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

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <Input handleAddNewTodo={handleAddNewTodo} />
      <Filter filterMode={filterMode} handleFilter={handleFilter} />
      {displayItems.map((item) => (
        <TodoItem key={item.key} item={item} handleCheck={handleCheck} />
      ))}
      <div className="panel-block">{displayItems.length} items</div>
    </div>
  );
}
export default Todo;