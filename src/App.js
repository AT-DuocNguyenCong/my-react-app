import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, IndexLink} from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className = "App-title">Chào mừng bạn đến với cửa hàng sách online</h1>
        </header>
        <Router>
          <div className='cls-nav'>
            <ul>
              <li> <Link to='/'>Trang chủ</Link></li>
              <li> <Link to='/book/add'>Thêm sách</Link></li>
            </ul>
            <Route exact path='/' component={Home}/>
            <Route exact path='/book/add' component={AddBook}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
