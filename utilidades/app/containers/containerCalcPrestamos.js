import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';

import CalcPrestamos from '../components/calcprestamos';

class containerCalcPrestamos extends Component {
  
  render() {
    
    return (
      <CalcPrestamos {...this.props} />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        calcprestamo: state.calcprestamo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerCalcPrestamos)