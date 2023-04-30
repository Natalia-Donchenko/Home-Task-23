import { useDispatch } from "react-redux";
import { editTodo } from "../../store/todoSlice";

const UpdateBtn = ({ text, setState, state, id, setEditing }) => {
  
  const dispatch = useDispatch();

  const edit = () =>{
    if (text === '') {
      setState({...state});
      return;
    }
    
    dispatch((editTodo({text, id})));
    setEditing(false);
 };

  return (
    <button 
      type='button' 
      className="editing-btn addTask-btn" 
      onClick={edit}
    >
      update
    </button>
  );
};

export default UpdateBtn;