import configureStore from 'redux-mock-store'
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import AddTodo from './AddTodo';

const mockStore = configureStore([]);

describe("My connected React-Redux component AddTodo", () => {
  let store;
  let component;

  beforeEach(() => {
    store= mockStore({
      myState: "sapmle text"
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
  });

  it("Should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);

  });
})