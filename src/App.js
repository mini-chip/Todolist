import { useState } from "react";
import "./app.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClickButton = () => {
    setTodoList([...todoList, { todo: todo, checked: false }]);
    setTodo("");
  };

  const handleToggleCheck = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].checked = !updatedTodoList[index].checked;
    setTodoList(updatedTodoList);
  };

  const handleDelete = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="form">
      <h1>TodoList</h1>
      <div className="InputSection">
        <input
          className="todoInput"
          type="text"
          placeholder="할 일을 입력하세요"
          value={todo}
          onChange={handleTodoChange}
        />
        <button type="button" onClick={handleClickButton}>
          추가
        </button>
      </div>
      <div className="todoSection">
        <ul>
          {todoList.map((item, index) => (
            <li
              key={index}
              style={{ display: item.checked ? "none" : "block" }}
            >
              <label htmlFor={`checkbox${index}`}>
                <input
                  type="checkbox"
                  id={`checkbox${index}`}
                  checked={item.checked}
                  onChange={() => handleToggleCheck(index)}
                />
                {item.todo}
              </label>
              <button type="button" onClick={() => handleDelete(index)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
