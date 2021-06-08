import React from "react";
import { connect } from "react-redux";
import action from './store/actions'

const App = (props) => {
  return <React.Fragment>
    <div>{props.number}</div>
    <div>
      <button onClick={props.add}>+</button>
    </div>
  </React.Fragment>;
};
const mapStateToProps = (state, ownProps) => {
  return {
    number: state.number,
  };
};
export default connect(mapStateToProps, action)(App);
