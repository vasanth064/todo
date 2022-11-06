import { FastField, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useGoogleAuth } from '../Contexts/GoogleAuthContext';
import { addData, getData, updateData } from '../Helpers/FirestoreHelper';

const AddTodo = ({ getTodo }) => {
  const { currentUser } = useGoogleAuth();
  const { uid } = useParams();
  const [todo, setTodo] = useState();
  useEffect(() => {
    const getATodo = async () => {
      const data = await getData(currentUser.uid);
      setTodo(...data.filter((todo) => todo.uid === uid));
    };
    getATodo();
  }, [uid, currentUser.uid]);
  const navigate = useNavigate();
  return uid ? (
    todo && (
      <div>
        <main>
          <article>
            <Formik
              initialValues={{
                todo: todo.todo,
                description: todo.description,
              }}
              onSubmit={async (todo) => {
                await updateData(currentUser.uid, uid, todo);
                document.querySelector('#todoForm').reset();
                navigate('/');
              }}>
              <Form id='todoForm'>
                <label htmlFor='todo'>
                  Todo <span style={{ color: 'red' }}>*</span>
                </label>
                <FastField
                  name='todo'
                  placeholder='Type your Todo ...'
                  required
                />
                <label htmlFor='description'>Description</label>
                <Field
                  as='textarea'
                  name='description'
                  placeholder=' Type your todo description ...'
                />
                <button type='submit'>UPDATE</button>
              </Form>
            </Formik>
          </article>
        </main>
      </div>
    )
  ) : (
    <div>
      <main>
        <article>
          <Formik
            initialValues={{
              todo: '',
              description: '',
            }}
            onSubmit={async (todo) => {
              await addData(currentUser.uid, todo);
              await getTodo();
              document.querySelector('#todoForm').reset();
            }}>
            <Form id='todoForm'>
              <label htmlFor='todo'>
                Todo <span style={{ color: 'red' }}>*</span>
              </label>
              <FastField
                name='todo'
                placeholder='Type your Todo ...'
                required
              />
              <label htmlFor='description'>Description</label>
              <Field
                as='textarea'
                name='description'
                placeholder=' Type your todo description ...'
              />
              <button type='submit'>ADD</button>
            </Form>
          </Formik>
        </article>
      </main>
    </div>
  );
};

export default AddTodo;
