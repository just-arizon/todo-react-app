import { useState } from 'react'
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className="className">
      <h1>
        React Todo <span>Streamline Your Day, the React Way!</span>
      </h1>
      <TodoList />
      <TodoCreate />
     </main>
    </>
  )
}

export default App
