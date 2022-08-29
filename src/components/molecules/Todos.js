import React from 'react';
import { TodosWrapper, DeleteButton } from './Todos.styles';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { removeTodo } from '../../store';
const Todos = ({ title = 'Untitled', id }) => {
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo({ id: id }));
  };
  return (
    <TodosWrapper>
      <p>{title}</p>
      <DeleteButton onClick={handleRemoveTodo} />
    </TodosWrapper>
  );
};

export default Todos;
