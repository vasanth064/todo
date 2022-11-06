import React, { useEffect, useState } from 'react';
import { useGoogleAuth } from '../Contexts/GoogleAuthContext';
import { getData } from '../Helpers/FirestoreHelper';
import AddTodo from './AddTodo';
import Todo from './Todo';

const DisplayTodo = () => {
  const [todos, setTodo] = useState([]);
  const { currentUser } = useGoogleAuth();
  const getTodo = async () => {
    const data = await getData(currentUser.uid);
    setTodo(data);
  };
  useEffect(() => {
    const getTodo = async () => {
      const data = await getData(currentUser.uid, [], true);
      setTodo(data);
    };
    console.log(todos);
    getTodo();
  }, [currentUser.uid]);

  return (
    <main>
      <AddTodo getTodo={getTodo} />

      <article>
        {todos ? (
          todos.map((todo) => {
            return (
              <Todo
                key={todo.uid}
                todo={todo}
                getTodo={getTodo}
                currentUserID={currentUser.uid}
              />
            );
          })
        ) : todos.length === 0 ? (
          <h4>Everything Caught Up ...</h4>
        ) : todos === false ? (
          <h4>Add a Todo to get Started ...</h4>
        ) : null}
      </article>
    </main>
  );
};

export default DisplayTodo;
