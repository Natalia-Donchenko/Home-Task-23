import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isDoneTodo } from '../store/todoSlice';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import ImportantBtn from './btns/ImportantBtn';
import EditBtn from './btns/EditBtn';
import DeleteBtn from './btns/DeleteBtn';

const ListTodo = () => {

  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
  const [ isEditing, setEditing ] = useState(false); 
  const [ state, setState ] = useState('');
  const { text, id } = state;
 
  return (
    <div>
      {
        isEditing ? (
          <EditTodo 
          setState={setState} 
          state={state}
          setEditing={setEditing} 
          isEditing={isEditing}
          text={text} 
          id={id}
          />
        ) : (
          <AddTodo />
        )
      }

      <ul className="list-wrapper">
        {
          todoList.map(({id, text, done, important})=> {
            return (
              <li className="list-item" key={id}>
                <input 
                  type='checkbox'
                  onChange={() => dispatch(isDoneTodo({id}))}
                />

                <div className={done ? "done" : ""  || important ? " important" : "" }>
                  <div className="list-text">
                    <span className='text'>{text}</span>
                  </div>
                </div>

                <div className="list-buttons">
                  <ImportantBtn 
                    id={id} 
                    done={done} 
                    important={important}
                  />

                  <EditBtn 
                    done={done} 
                    id={id} 
                    text={text}
                    setEditing={setEditing}
                    setState={setState} 
                    state={state}
                  />

                  <DeleteBtn 
                    id={id}
                  />
                </div>
              </li>
            )
          }) 
        }
      </ul>
    </div>
  );
};

export default ListTodo;