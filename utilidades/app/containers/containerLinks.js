import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import LinksExternos from '../components/listaLinks'

class containerLink extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      let listaLinks = [
        {nombre: "Consulta NIF intracomunitario",
        url: "http://ec.europa.eu/taxation_customs/vies/",
        icon: "ios-card"},
        {nombre: "Consulta del código postal",
        url: "https://www.correos.es/ss/Satellite/site/aplicacion-1349167812778-herramientas_y_apps/detalle_app-sidioma=es_ES",
        icon: "ios-mail"},
        {nombre: "Covertidor de moneda, longitud, masa, ..",
        url: "http://www.convertworld.com/es/",
        icon: "ios-calculator"},
        {nombre: "Horas del Mundo",
        url: "https://www.timeanddate.com/worldclock/",
        icon: "ios-clock"}
      ];
    return (
        
        <LinksExternos {...this.props} links={listaLinks} />
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

export default connect(mapStateToProps, mapDispatchToProps)(containerLink)	