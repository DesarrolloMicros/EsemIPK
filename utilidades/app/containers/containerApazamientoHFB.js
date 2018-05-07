import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import AplazamientoHFB from '../components/aplazamientoHFB';

import * as fn  from '../helpers/funcionesgenerales';

class containerApazamientoHFB extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: { "date": '',
                "dateF": '',
                "importe":'',
                "pVoluntario": false,
                "plazo": 1,
                "meses": 0
            }
    };
  }

  onChange (data) {
        //console.log('onChange 1', this.state);
        let stateData = JSON.parse(JSON.stringify(this.state.data))

        if (stateData[data.name] !== data.value){
            stateData[data.name] = data.value;

            this.setState({
                data : stateData
            }, this.ejecutarLlamada.bind(this));
            //console.log('onChange', this.state);
        }
    }

  componentDidMount(){
    this.props.getAplazamientoHFBA(0, '01-01-2000',0, false);
  }

  ejecutarLlamada(){    
   
    var F_I=this.state.data.date;
    var F_F=this.state.data.dateF;

    if (!fn.isnull(F_I) && !fn.isnull(F_F)){
      var Meses= fn.calculateTotalMonthsDifference(fn.cvDate(F_I),fn.cvDate(F_F)) ; 
      this.props.getAplazamientoHFBA(this.state.data.importe, this.state.data.date.replace(/\//g, ''), Meses, this.state.data.pVoluntario);
    }
    
  }

  render() {
    //console.log('AplazamientoHFB', this.props);
    return (
      <AplazamientoHFB {...this.props} {...this.state} onChange={this.onChange.bind(this)} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        aplazamientoHFB: state.aplazamientoHFB,
        limitesHFB:state.limitesHFB
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerApazamientoHFB)