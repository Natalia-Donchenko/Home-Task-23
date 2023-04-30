import { render} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import EditTodo from "./EditTodo";

describe ('component EditTodo', () => {
  test('Should render EditTodo', () => {
    const editTodo  = render (
      <Provider store={store}>
        <EditTodo />
      </Provider>
    )

    expect(editTodo).toMatchSnapshot();
  }) ;
});