import { useDispatch } from "react-redux";
import { isImportant } from "../../store/todoSlice";

const ImportantBtn = ({ id, done, important}) => {

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(isImportant({id}))}
      className={ done ? "btn-done": "" || important ? "imp-btn" : "optional-btn"}
    >
      important
    </button>
  );
};

export default ImportantBtn;