import React, { useState } from 'react'

function Todo() {
  
    let value = "";
    let [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);
    // let todos = ["todo1", "todo2", "todo3"];
  function printValue(e){
    // console.log(e.target.value);
    //  value = e.target.value;
    setValue(e.target.value);
  }

  function addTodo(e)
  {
    e.preventDefault();

    if(!value.trim())
    {
        return;
    }
    // console.log(value);
    // todos.push(value);
    setTodos((prev) => {
        return [...prev, value];
    });
  }
  return (
    <div>
        <h1>Todo</h1>
        <form action="" onSubmit={addTodo}>
            {/* <input type="text" onChange={printValue} /> */}
            <input type="text" onChange={printValue} />
            <button>Add</button>
        </form>
        <ul style={{listStyleType:'none'}}>
            {
                todos.map((todo) =>(
                     <li>{todo}</li> 
                ))
            }
        </ul>
    </div>
  )
}

export default Todo