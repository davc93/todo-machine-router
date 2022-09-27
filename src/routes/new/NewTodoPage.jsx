import React from 'react'
import { TodoForm } from '../../UI/TodoForm'
import { useTodos } from '../useTodos';
export const NewTodoPage = () => {
  const {stateUpdaters} = useTodos();
  const {addTodo} = stateUpdaters
  return (
    <TodoForm  
      label="Escribe tu nuevo TODO"
      submitText="Anadir"
      submitEvent={(text)=> addTodo(text)}
    
    />
  )
}
