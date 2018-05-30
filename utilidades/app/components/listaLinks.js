import React, {Component} from 'react';
import { ScrollView, View, Text,TouchableOpacity,Image, Linking } from 'react-native';
import {
 
  Button,
  Icon
} from 'native-base';

import Cabecera from './generales/cabecera';

import * as pages from '../constants/navigation';

import LinkExterno from './linkexterno';

import styles from '../css/app';
import * as estilos from '../constants/styles';
     
const BtnLink = ({icono,texto,link}) => <TouchableOpacity style={{width:'46%',backgroundColor: estilos.Btn_backgroundColorUtilidades ,padding:10, borderRadius:5}} onPress={() => Linking.openURL(link)}>
                                          <View style={{alignItems:'center'}}><Image style={{marginTop: 5,resizeMode:'contain',width:estilos.IconoBoton_WIDTH, height:estilos.IconoBoton_HEIGHT}} source={icono}/></View>
                                          <Text style={{color: 'white',textAlign:'center',fontSize:15, marginTop:-2, padding:1, fontFamily: "Merriweather-Black"}}>{texto}</Text>
                                        </TouchableOpacity>  

export default class listaLinks extends Component {
  
  render() {
    return (
      <ScrollView style={{backgroundColor: '#e3e1da'}}>
        <Cabecera onPress={() => this.props.onItemSelected(pages.INICIO)} 
                  Texto='ENLACES EXTERNOS'
                  ColorFondo={estilos.FondoTituloCabecera_UTILIDADES}/>
        
        <View style={{padding:10, justifyContent:'center', marginTop:20}} >
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:12}}>
              <BtnLink icono={estilos.Ico_ConsultaNIFIntracomunitario} texto={'Consulta NIF' + '\n'+ 'intracomunitario'} link='http://ec.europa.eu/taxation_customs/vies/'/>            
              <BtnLink icono={estilos.Ico_BuscadorCodigosPostales} texto={'Buscador' + '\n' + 'Códigos Postales'} link='https://www.correos.es/ss/Satellite/site/aplicacion-1349167812778-herramientas_y_apps/detalle_app-sidioma=es_ES'/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:12}}>
              <BtnLink icono={estilos.Ico_ConvertidorUnidades} texto={'Convertidor' + '\n' + 'de unidades'} link='http://www.convertworld.com/es/'/>                          
              <BtnLink icono={estilos.Ico_HorariosMundo} texto={'Horarios' + '\n' + 'del Mundo'} link='https://www.timeanddate.com/worldclock/'/>           
          </View>         
        </View>

      </ScrollView>
    );
  }
}
