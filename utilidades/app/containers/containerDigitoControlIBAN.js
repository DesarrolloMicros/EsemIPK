import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import DigitocontrolIBAN from '../components/digitocontrolIBAN';

class containerDigitoControlIBAN extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <DigitocontrolIBAN {...this.props} />              
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        CodIBAN: state.digitocontrolIBAN.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerDigitoControlIBAN)