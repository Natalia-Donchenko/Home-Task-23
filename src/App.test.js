import { render} from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

describe ('component App', () => {
  test('Should render App', () => {
    const app = render (
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(app).toMatchSnapshot();
  }) ;
});