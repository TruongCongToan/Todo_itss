import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';
import useStorage from '../hooks/storage';
import { getKey } from '../lib/util';

function Todo() {
  const [items, putItems] = React.useState([
    /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      {items.map((item) => (
        <TodoItem key={item.key} item={item} />
      ))}
      <div className="panel-block">{items.length} items</div>
    </div>
  );
}

export default Todo;