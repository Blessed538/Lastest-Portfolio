import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
      (setInputText = ''),
    ]);
  };
  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onChange={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas-fa-plus-square"></i>
        </button>
        <div className="select">
          <select className="filter-todo">
            <option value="all"></option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
