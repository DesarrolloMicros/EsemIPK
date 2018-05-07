import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import Letradni from '../components/letradni';

class containerLetradni extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Letradni
        {...this.props} />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        letradni: state.letradni
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerLetradni)