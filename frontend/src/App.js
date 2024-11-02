import React, { Component } from "react";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Loading } from "./components/LoadingComponent";
import { PersistGate } from "redux-persist/es/integration/react";

const { persistor, store } = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <Main />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
