import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    console.log('THIS.PROPS.SMURFS: ', this.props.smurfs);
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
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
  { getSmurfs },
)(App);
