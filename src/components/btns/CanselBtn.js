const CanselBtn = ( { setEditing, isEditing }) => {

  const canselEdit = () => {
    setEditing(!isEditing);
  };

  return (
    <button
      type="button"
      className="editing-btn addTask-btn"
      onClick={canselEdit}
      id="cbtn"
    >
      cansel
    </button>
  );
};

export default CanselBtn;