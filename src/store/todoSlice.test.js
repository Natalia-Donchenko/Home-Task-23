import todoReducer, {
  isDoneTodo, 
  deleteTodo,
  editTodo,
  addTodo,
  isImportant
} from "./todoSlice";


describe("todoSlice", () => {

  const emptyInitialState = {
    todoList: []
  };

  const initialState = {
    todoList: [
      {text: 'test todo', id: 123, done: false, edit: false, important: false}
    ]
  };

  test("should return default state when passed an empty action", () => {
    const result = todoReducer(undefined, { type: "" });

    expect(result.todoList).toEqual([]);
  });

  test("should add todo with 'addTodo' action", () => {
    const action= { type: addTodo.type, payload: "test todo"};
    let result = todoReducer(emptyInitialState, action);

    expect(result.todoList.length).toBe(1);
  });

  test("should edit todo with 'editTodo' action", () => {
    const action = { type: editTodo.type, payload: {id: 123, text: "learn Redux"}};
    const result = todoReducer(initialState, action);

    expect(result.todoList[0].text).toEqual("learn Redux");
  });

  test("should delete todo with 'deleteTodo' action", () => {
    const action = { type: deleteTodo.type, payload: {id: 123}};
    const result = todoReducer(initialState, action);
    
    expect(result.todoList).toEqual([]);
  });
  
  test("should toggle todo done status with 'isDoneTodo' action", () => {
    const action = { type: isDoneTodo.type, payload: {id: 123}};
    let result = todoReducer(initialState, action);

    expect(result.todoList[0].done).toEqual(true);
  })

  test("should toggle todo important status with 'isImportant' action", () => {
    const action = { type: isImportant.type, payload: {id: 123}};
    let result = todoReducer(initialState, action);

    expect(result.todoList[0].important).toEqual(true);
  });
});