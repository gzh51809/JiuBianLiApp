import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//引入Ant Design 插件
import {Button} from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button type="primary">今天也是充满希望的一天</Button>
      </div>
    );
  }
}

export default App;
