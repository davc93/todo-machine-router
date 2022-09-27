
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../../UI/TodoForm'
import { useTodos } from '../useTodos'
export const EditTodoPage = () => {
  const location = useLocation();
  

  const {state,stateUpdaters} = useTodos();
  const {editTodo} = stateUpdaters
  const {getTodo, loading} = state
  const params = useParams();
  const id = parseInt(params.id);
  
  let todoText;
  if(location.state?.todo){
    todoText = location.state.todo.text;
  }
  else if(loading){
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm 
  
      label="Edita tu todo"
      submitText="Editar"
      defaultTodoText={todoText}
      submitEvent={(newText)=> editTodo(id,newText)}
    
    />
  )
}
