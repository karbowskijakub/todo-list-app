import React from 'react';
import { ContainerBox,FormField,AddBar, Button,TodoWrapper } from './TodoView.styles';
import { Title } from '../components/atoms/Title/Title.styles';
import { Input } from '../components/atoms/Input/Input.styles';
import { useSelector,useDispatch  } from 'react-redux';
import Todos from '../components/molecules/Todos';
import { addTodo } from '../store';
import { useForm } from 'react-hook-form';

const TodoView = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddTodo = ({ title }) => {
    dispatch(addTodo({ title }));
  };

  return (
    <ContainerBox>
      <FormField onSubmit={handleSubmit(handleAddTodo)}>
        <Title>Todo list app</Title>

        <AddBar>
          <Input {...register('title', { required: true })} name="title" id="title"></Input>
          <Button type="submit">Add Todo</Button>
        </AddBar>
      </FormField>
      <TodoWrapper>{todos.length ? todos.map(({ title, id }) => <Todos id={id} key={id} title={title} />) : <p>Create Todos</p>}</TodoWrapper>
    </ContainerBox>
  );
};

export default TodoView;
