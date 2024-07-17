import React from 'react';
import TodoShow from './TodoShow';

const TodoList = ({ todos, removeTodo, changeTodo }) => {
   
    const renderedTodos = todos.map((todo) => {
        return (
          <TodoShow
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            changeTodo={changeTodo}
          />
        );
      });
    return <div>

    </div>
}

export default TodoList