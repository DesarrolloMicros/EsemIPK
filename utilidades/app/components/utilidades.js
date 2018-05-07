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

import styles from '../css/app';
import * as estilos from '../constants/styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as pages from '../constants/navigation';

var screen = Dimensions.get('window');

/*
const BtnPage = ({icono,texto, onItemSelected}) => <TouchableOpacity style={{width:'48%',backgroundColor: '#403322', padding:10,borderRadius:5, justifyContent:'center'}} onPress={() => onItemSelected()}>
                                                      <View style={{alignItems:'center'}}><Icon name={icono} style={{color:'rgba(255,255,255,0.95)',fontSize: 25}} /></View>
                                                      <Text style={{color:'#c08e11', textAlign:'center',fontSize: 15, marginTop:5}}>{texto}</Text>
                                                    </TouchableOpacity>
*/

const BtnPage = ({ icono, texto, onItemSelected }) => <TouchableOpacity style={{ width: '48%', backgroundColor: estilos.Btn_backgroundColorUtilidades, padding: 10, borderRadius: 5 }} onPress={() => onItemSelected()}>
                                                        <View style={{ alignItems: 'center' }}><Image style={{ resizeMode:'contain',width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={icono} /></View>
                                                        <Text style={{ color: estilos.Btn_ColorUtilidades, textAlign: 'center', fontSize: 15, marginTop: 5, padding:5,fontFamily: "Merriweather-Regular"}}>{texto}</Text>
                                                      </TouchableOpacity>

export default class Utilidades extends Component {

  constructor(props) {  
    super(props);

    this.state={height:screen.height};
    
    this._onLayout=this._onLayout.bind(this);
  } 

  _onLayout(event){
    const {width,height}=event.nativeEvent.layout;
    const orientation =(width>height)?'APAISADO':'NORMAL';   
    //console.log('Orientacion: ' + orientation + ', width: ' + width + ', height: ' + height);
    this.setState({height:height});
  }

  render() {   

    return (
      <ScrollView style={{ backgroundColor: 'white' , flex: 1}} onLayout={this._onLayout}>


        <View style={{ flexDirection:'row', margin: 0, backgroundColor: estilos.FondoTituloCabecera_UTILIDADES}} >          
          <Button  transparent onPress={() => this.props.onItemSelected(pages.INICIO)}>
                <Icono style={{color:'white'}} name="arrow-round-back"/>
          </Button>  
          <View style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
            <Text style={{ fontSize: 20, textAlign:'center', color:'white',fontFamily: "Merriweather-Regular" }}>UTILIDADES CONTABLES</Text>                 
          </View>
        </View>

        <View style={{padding:10,  marginTop:15}} >
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
              <BtnPage icono={estilos.Ico_CalcularLetraDNI} texto='Calcular                 letra DNI' onItemSelected={() => this.props.onItemSelected(pages.LETRA_DNI)}/>            
              <BtnPage icono={estilos.Ico_CalculadoraPrestamos} texto='Calculadora de                 préstamos' onItemSelected={() => this.props.onItemSelected(pages.CALCULO_PRESTAMOS)}/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
              <BtnPage icono={estilos.Ico_AplazarDeudaHacienda} texto='Aplazar deuda Hacienda' onItemSelected={() => this.props.onItemSelected(pages.APLAZAMIENTO_HFB)}/>                          
              <BtnPage icono={estilos.Ico_CalculadoraIVA} texto='Calculadora                 IVA' onItemSelected={() => this.props.onItemSelected(pages.CALCULO_IVA)}/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
              <BtnPage icono={estilos.Ico_DigitoControlCuentaBancaria} texto='Dígito Control Cuenta Bancaria' onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL_CCC)}/>            
              <BtnPage icono={estilos.Ico_ConvertidorCCCIBAN} texto='Convertidor                 CCC-IBAN' onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL_IBAN)}/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
              <BtnPage icono={estilos.Ico_DigitoControlSeguridadSocial} texto='Dígito control Seguridad Social' onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL)}/>            
              <BtnPage icono={estilos.Ico_ComprobadorCIF} texto='Comprobador                 CIF' onItemSelected={() => this.props.onItemSelected(pages.DIGITO_CONTROL_CIF)}/>           
          </View>
        </View>

      </ScrollView>
    );
  }
}

