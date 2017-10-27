import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const HOC = (InnerComponent) => class extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }
  update() {
    this.setState({count: this.state.count + 1})
  }
  componentWillMount() {
    console.log('Will mount');
  }
  render() {
    return (
      <InnerComponent {...this.props} {...this.state}/>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div >
        <Button>Button</Button>
        <hr/>
        <LabelHOC>Label</LabelHOC>
      </div>
    );
  }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends Component {
  componentWillMount() {
    console.log('label will mount');
  }
  render() {
    return (
      <label>{this.props.children} - {this.props.count}</label>
    );
  }
}

const LabelHOC = HOC(Label)

export default App;
