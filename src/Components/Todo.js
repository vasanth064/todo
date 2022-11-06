import React from 'react';
import { Link } from 'react-router-dom';
import { deleteData } from '../Helpers/FirestoreHelper';

const Todo = ({ todo, getTodo, currentUserID }) => {
  return (
    <details>
      <summary>{todo.todo}</summary>
      <p>{todo.description}</p>
      <div className='grid'>
        <Link to={`/update/${todo.uid}`}>
          <button>Update</button>
        </Link>
        <button
          onClick={async () => {
            await deleteData(currentUserID, todo.uid);
            getTodo();
          }}>
          Delete
        </button>
      </div>
    </details>
  );
};

export default Todo;
