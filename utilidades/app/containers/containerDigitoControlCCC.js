import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import DigitocontrolCCC from '../components/digitocontrolCCC';

class containerDigitoControlCCC extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <DigitocontrolCCC {...this.props} />              
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dc: state.digitocontrolCCC.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerDigitoControlCCC)