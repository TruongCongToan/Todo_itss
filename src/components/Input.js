import React, { useState } from 'react';

function Input({ handleAddNewTodo }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleAddNewTodo(text);
      setText('');
    }
  };

  return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Todoを入力してください"
        value={text}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
}

export default Input;
