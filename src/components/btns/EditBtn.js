const EditBtn = ({ done, id, text, setEditing, setState, state }) => {

  const onEditToggle = ( id, text) => {
    setEditing(true);
    setState({
      ...state, id, text
    });
  };

  return (
    <button
      type="button"
      className={done ? "btn-done" : "optional-btn"}
      onClick={() =>onEditToggle(id, text)}
    >
      edit
    </button>
  )
};

export default EditBtn;