import React, { useState } from 'react';


const TodoCreate = ({createTodo}) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(title);
        setTitle('');
        console.log(title);
      };
    return <form className='todo-create' onSubmit={handleSubmit}>
        <input 
        type="text"
        name='title'
        id='title'
        placeholder='Enter a todo'
        value={title}
        onChange={handleChange}
        />
        </form>
}

export default TodoCreate;