import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Toggle from "./components/Toggle";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Toggle />
      </Provider>
    );
  }
}

export default App;
