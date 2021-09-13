import './App.css';
import { connect } from 'react-redux';
import * as actionCreators from './state/action-creator/action-creator.js';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.account}</h1>
        <button onClick={() => this.props.deposit(1000)}>Deposit</button>
        <button onClick={() => this.props.withdraw(1000)}>Withdraw</button>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    account: state.account,
  }
}

export default connect(mapStateToProps, actionCreators)(App);
