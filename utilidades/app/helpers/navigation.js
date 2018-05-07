import React, { Component } from 'react';

import * as pages from '../constants/navigation';

import ContainerLetraDNI from '../containers/containerLetradni';
import ContainerLinks from '../containers/containerLinks';
import ContainerCalcPrestamos from '../containers/containerCalcPrestamos';
import ContainerInicio from '../containers/containerInicio';
import ContainerApazamientoHFB from '../containers/containerApazamientoHFB';
import ContainerDigitoControlSS from '../containers/containerDigitoControlSS';
import ContainerDigitoControlCIF from '../containers/containerDigitoControlCIF';
import ContainerDigitoControlCCC from '../containers/containerDigitoControlCCC';
import ContainerDigitoControlIBAN from '../containers/containerDigitoControlIBAN';
import ContainerCalcIva from '../containers/containerCalcIva';
import ContainerUtilidades from '../containers/containerUtilidades';

export default class cc extends Component {
    
    NavigateTo = (scene) => {
        let page = <ContainerInicio onItemSelected={this.props.onItemSelected}/>;
        if (scene === pages.LETRA_DNI){
            page = <ContainerLetraDNI onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.ENLACES_EXT){
            page = <ContainerLinks onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.CALCULO_PRESTAMOS){
            page = <ContainerCalcPrestamos onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.APLAZAMIENTO_HFB){
            page = <ContainerApazamientoHFB onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.DIGITO_CONTROL){
            page = <ContainerDigitoControlSS onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.DIGITO_CONTROL_CIF){
            page = <ContainerDigitoControlCIF onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.DIGITO_CONTROL_CCC){
            page = <ContainerDigitoControlCCC onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.DIGITO_CONTROL_IBAN){
            page = <ContainerDigitoControlIBAN onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.CALCULO_IVA){
            page = <ContainerCalcIva onItemSelected={this.props.onItemSelected}/>;
        }else if (scene === pages.UTILIDADES){
            page = <ContainerUtilidades onItemSelected={this.props.onItemSelected} />;
        }
        
        return page;
    }
    render(){
        return (this.NavigateTo(this.props.scene))
    }
}