import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import CalculoIVA from '../components/CalculoIVA';

class containerCalcIva extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <CalculoIVA {...this.props} />              
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.calcIVA.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerCalcIva)