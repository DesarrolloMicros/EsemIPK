import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import DigitocontrolCIF from '../components/digitocontrolCIF';

class containerDigitoControlCIF extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <DigitocontrolCIF {...this.props} />              
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        icono: state.digitocontrolCIF
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerDigitoControlCIF)