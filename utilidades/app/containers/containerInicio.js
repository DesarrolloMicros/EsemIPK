import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import Inicio from '../components/inicio';

class containerInicio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Inicio {...this.props} />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerInicio)