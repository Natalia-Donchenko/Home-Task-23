import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todoSlice";

const DeleteBtn = ({ id }) => {

  const dispatch = useDispatch()  

  return (
    <button
      type="button"
      className="optional-btn"
      onClick={() => dispatch(deleteTodo({id}))}
    >
      delete
    </button>
  )
};

export default DeleteBtn;