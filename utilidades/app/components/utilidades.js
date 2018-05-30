import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity,Dimensions,Image} from 'react-native';

import {
    ListItem,
    Item,
    Label,
    Input,
    Button,
    Icon as Icono
} from 'native-base';

import Cabecera from './generales/cabecera';

import styles from '../css/app';
import * as estilos from '../constants/styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as pages from '../constants/navigation';

var screen = Dimensions.get('window');

const BtnPage = ({ icono, texto, onItemSelected, aumentar }) => <TouchableOpacity style={{ width: '46%', backgroundColor: estilos.Btn_backgroundColorUtilidades, padding: 8, borderRadius: 5 }} onPress={() => onItemSelected()}>
                                                        <View style={{ alignItems: 'center' }}>
                                                          <Image style={{ marginTop: 5,resizeMode:'contain',width: (aumentar === true ? estilos.IconoBoton_WIDTH + 12 : estilos.IconoBoton_WIDTH), height: estilos.IconoBoton_HEIGHT }} source={icono} />
                                                        </View>
                                                        <Text style={{ color: estilos.Btn_ColorUtilidades, textAlign: 'center', fontSize: 15, marginTop: -2, padding:3, fontFamily: "Merriweather-Black"}}>{texto}</Text>
                                                      </TouchableOpacity>

export default class Utilidades extends Component {

  constructor(props) {  
    super(props);

    this.state={height:screen.height,width:screen.width};
    
    this._onLayout=this._onLayout.bind(this);
  } 

  _onLayout(event){
    const {width,height}=event.nativeEvent.layout;
    const orientation =(width>height)?'APAISADO':'NORMAL';
    this.setState({height:height,width: width});
  }

  render() {   
    const txtLetraDNI = 'Calcular ' + ((this.state.width>this.state.height)? '' : '\n') + 'letra DNI';
    const txtLetraIVA = 'Calculadora ' + ((this.state.width>this.state.height)? '' : '\n') + 'IVA';
    const txtIBAN = 'Convertidor ' + ((this.state.width>this.state.height)? '' : '\n') + 'CCC-IBAN';
    const txtCIF = 'Comprobador ' + ((this.state.width>this.state.height)? '' : '\n') + 'CIF';
    return (
      <ScrollView style={{ backgroundColor: 'white' , flex: 1}} onLayout={this._onLayout}>
        <Cabecera onPress={() => this.props.onItemSelected(pages.INICIO)} 
                  Texto='UTILIDADES CONTABLES'
                  ColorFondo={estilos.FondoTituloCabecera_UTILIDADES}/>

        <View style={{padding:20,  marginTop:10}} >
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:12}}>
              <BtnPage icono={estilos.Ico_CalcularLetraDNI} texto={txtLetraDNI} onItemSelected={() => this.props.onItemSelected(pages.LETRA_DNI)}/>            
              <BtnPage icono={estilos.Ico_CalculadoraPrestamos} texto='Calculadora de préstamos' onItemSelected={() => this.props.onItemSelected(pages.CALCULO_PRESTAMOS)}/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:12}}>
              <BtnPage icono={estilos.Ico_AplazarDeudaHacienda} texto='Aplazar deuda Hacienda' onItemSelected={() => this.props.onItemSelected(pages.APLAZAMIENTO_HFB)}/>                          
              <BtnPage icono={estilos.Ico_CalculadoraIVA} texto={txtLetraIVA} onItemSelected={() => this.props.onItemSelected(pages.CALCULO_IVA)}/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:12}}>
              <BtnPage icono={estilos.Ico_DigitoControlCuentaBancaria} texto='Dígito Control Cuenta Bancaria' aumentar={true} onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL_CCC)}/>            
              <BtnPage icono={estilos.Ico_ConvertidorCCCIBAN} texto={txtIBAN} onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL_IBAN)}/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:12}}>
              <BtnPage icono={estilos.Ico_DigitoControlSeguridadSocial} texto='Dígito control Seguridad Social' onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL)}/>            
              <BtnPage icono={estilos.Ico_ComprobadorCIF} texto={txtCIF} onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL_CIF)}/>           
          </View>
        </View>

      </ScrollView>
    );
  }
}

