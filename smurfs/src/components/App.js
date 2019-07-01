import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
import './App.css';

const initialState = {
  input: {
    age: '',
    height: '',
    name: '',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const newSmurf = { ...this.state.input };
    this.props.addSmurf(newSmurf);
    this.setState(initialState);
  };

  render() {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.input.name}
            onChange={this.handleInput}
          />
          <input
            type='text'
            name='age'
            placeholder='age'
            value={this.state.input.age}
            onChange={this.handleInput}
          />
          <input
            type='text'
            name='height'
            placeholder='height'
            value={this.state.input.height}
            onChange={this.handleInput}
          />
          <button type='submit' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        {this.props.smurfs.map((smurf) => (
          <div key={smurf.id}>
            <h1>Name: {smurf.name}</h1>
            <p>Age: {smurf.age} years old</p>
            <p>Height: {smurf.height} tall</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs },
)(App);
