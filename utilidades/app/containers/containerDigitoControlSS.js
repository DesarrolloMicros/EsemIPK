import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import DigitocontrolSS from '../components/digitocontrolSS';

class containerDigitoControlSS extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <DigitocontrolSS {...this.props} />              
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dc: state.digitocontrolSS
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerDigitoControlSS)