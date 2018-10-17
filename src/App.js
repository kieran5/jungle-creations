import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import { Provider } from 'react-redux';
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Jungle Creations</h1>
          </header>
          <AddPost />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
