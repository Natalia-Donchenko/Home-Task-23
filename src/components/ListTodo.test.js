import { render} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import ListTodo from "./ListTodo";

describe ('component ListTodo', () => {
  test('Should render ListTodo', () => {
    const listTodo = render (
      <Provider store={store}>
        <ListTodo />
      </Provider>
    )

    expect(listTodo).toMatchSnapshot();
  }) ;
});