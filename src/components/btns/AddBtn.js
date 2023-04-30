import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

const AddBtn = ( { setState, state, text }) => {

  const dispatch = useDispatch();

  const add = () => {
    if(text === '') {
      setState({...state});
    };
    
    dispatch(addTodo({newText: text}));
    setState({...state, text: ''});
  }
  return (
    <button 
      type='button' 
      className="addTask-btn"
      onClick={add}
    >
      add
    </button>
  );
};

export default AddBtn;