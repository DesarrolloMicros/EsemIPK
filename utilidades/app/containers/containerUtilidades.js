import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import Utilidades from '../components/utilidades';

class containerCalcIva extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <Utilidades {...this.props} />              
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

export default connect(mapStateToProps, mapDispatchToProps)(containerCalcIva)