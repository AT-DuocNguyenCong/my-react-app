import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {items: [
      {
        'name': 'Another',
        'type': 'Tieu thuyet kinh di',
        'author': 'Yukito Ayatsuji'
      },
      {
        'name': 'Dau truong sinh tu',
        'type': 'Tieu thuyet',
        'author': 'Suzanne Collins'
      },
      {
        'name': 'Toi thay hoa vang tren co xanh',
        'type': 'Truyen ngan',
        'author': 'Nguyen Nhat Anh'
      }
    ]}
  }
  componentWillMount() {

  }
  render() {
    let items = this.state.items
    return (
      <div >
        <table>
          {items.map(item => <h4>{item.name}</h4>)}
          {items.map(item => <h4>{item.type}</h4>)}
          {items.map(item => <h4>{item.author}</h4>)}
        </table>
      </div>
    );
  }
}

export default App;
