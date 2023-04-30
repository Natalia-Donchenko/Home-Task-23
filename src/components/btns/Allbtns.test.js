import { Provider} from "react-redux"
import AddBtn from "./AddBtn"
import CanselBtn from "./CanselBtn"
import DeleteBtn from "./DeleteBtn"
import EditBtn from "./EditBtn"
import UpdateBtn from "./UpdateBtn"
import ImportantBtn from "./ImportantBtn"
import { render, cleanup } from "@testing-library/react"
import store from "../../store"

afterEach(cleanup);

describe("Button Add", () => {

  const { container } = render(
    <Provider store={store}>
      <AddBtn title="AddBtn" />
    </Provider>
  );

    test("should render Add btn", () => {
      expect(container).toMatchSnapshot();
    });
});


describe("Button Cansel", () => {

  const { container } = render(
    <Provider store={store}>
      <CanselBtn  title="CanselBtn" />
    </Provider>
  )

  it("should render Cansel btn", () => {
    expect(container).toMatchSnapshot();
  });
});


describe("Button Delete", () => {

  const { container } = render(
    <Provider store={store}>
      <DeleteBtn  title="DeleteBtn" />
    </Provider>
  );

  it("should render Delete btn", () => {
    expect(container).toMatchSnapshot();
  });
});


describe("Button Edit", () => {
  const { container } = render(
    <Provider store={store}>
      <EditBtn  title="EditBtn" />
    </Provider>
  );

  it("should render Edit btn", () => {
    expect(container).toMatchSnapshot();
  });
});


describe("Button Important", () => {
  const { container } = render(
    <Provider store={store}>
      <ImportantBtn  title="ImportantBtn" />
    </Provider>
  );

  it("should render Important btn", () => {
    expect(container).toMatchSnapshot();
  });
});


describe("Button Update", () => {

  const { container } = render(
    <Provider store={store}>
      <UpdateBtn  title="UpdateBtn" />
    </Provider>
  );

  it("should render Update btn", () => {
    expect(container).toMatchSnapshot();
  });
});