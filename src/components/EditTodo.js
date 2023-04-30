import CanselBtn from "./btns/CanselBtn";
import UpdateBtn from "./btns/UpdateBtn";

const EditTodo = ({ setState, state, setEditing, isEditing, text, id}) => {

  

  const handleChange = (e) =>{
    setState({...state, [e.target.name]: e.target.value});
  };

  return (
    <div className="addTask">
      <input 
        className="task-input h"
        type='text' 
        value={text} 
        name='text' 
        onChange={handleChange}
      />

      <div className="edit-list-buttons">
        <UpdateBtn 
          text={text} 
          setState={setState} 
          state={state} 
          id={id} 
          setEditing={setEditing}
        />

        <CanselBtn 
          setEditing={setEditing} 
          isEditing={isEditing}
        />
      </div>   
    </div>
  );
};

export default EditTodo;