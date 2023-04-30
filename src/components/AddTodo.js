import React, { useState } from 'react';
import AddBtn from './btns/AddBtn';

const AddTodo = () => {
  const [ state, setState ] = useState({
    text: ''
  });
  const { text } = state;
   
  const handleChange = (e) =>{
    setState({...state, [e.target.name]: e.target.value});
  };

  return  (
    <>
    <div className='addTask'>
      <input 
        className="task-input"
        placeholer='What do you want to do?'
        type='text' 
        value={text} 
        name='text' 
        onChange={handleChange} 
      />

      <AddBtn 
        setState={setState}
        state={state} 
        text = {text}
      />
    </div>
    </>
  );
};

export default AddTodo;
