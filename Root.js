import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/createStore";
import { AppNavigator } from "./src/_core/navigator/reduxNav";

export const reduxStore = store;

class Root extends React.Component {
  constructor(props, context, ...args) {
    super(props, context, ...args);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
