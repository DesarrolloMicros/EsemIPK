import React, {Component} from 'react';
import { ScrollView, View, Text,TouchableOpacity,Image, Linking } from 'react-native';
import {
 
  Button,
  Icon
} from 'native-base';

import * as pages from '../constants/navigation';

import LinkExterno from './linkexterno';

import styles from '../css/app';
import * as estilos from '../constants/styles';

const BtnLink = ({icono,texto,link}) => <TouchableOpacity style={{width:'48%',backgroundColor: estilos.Btn_backgroundColorUtilidades ,padding:10, borderRadius:5}} onPress={() => Linking.openURL(link)}>
                                          <View style={{alignItems:'center'}}><Image style={{resizeMode:'contain',width:estilos.IconoBoton_WIDTH, height:estilos.IconoBoton_HEIGHT}} source={icono}/></View>
                                          <Text style={{color: estilos.Btn_ColorUtilidades,textAlign:'center',fontSize:15, marginTop:5, padding:5, fontFamily: "Merriweather-Regular"}}>{texto}</Text>
                                        </TouchableOpacity>       

export default class listaLinks extends Component {
  
  render() {
    return (
      <ScrollView style={{backgroundColor: '#e3e1da'}}>

        <View style={{ flexDirection:'row', margin: 0, backgroundColor: estilos.FondoTituloCabecera_UTILIDADES}} >          
          <Button  transparent onPress={() => this.props.onItemSelected(pages.INICIO)}>
                <Icon style={{color:'white'}} name="arrow-round-back"/>
          </Button>  
          <View style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
            <Text style={{ fontSize: 20, textAlign:'center', color:'white', fontFamily: "Merriweather-Regular" }}>ENLACES EXTERNOS</Text>                 
          </View>
        </View>


        <View style={{padding:10, justifyContent:'center', marginTop:15}} >
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
              <BtnLink icono={estilos.Ico_ConsultaNIFIntracomunitario} texto='Consulta NIF intracomunitario' link='http://ec.europa.eu/taxation_customs/vies/'/>            
              <BtnLink icono={estilos.Ico_BuscadorCodigosPostales} texto='Buscador Códigos Postales' link='https://www.correos.es/ss/Satellite/site/aplicacion-1349167812778-herramientas_y_apps/detalle_app-sidioma=es_ES'/>           
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:10}}>
              <BtnLink icono={estilos.Ico_ConvertidorUnidades} texto='Convertidor de unidades' link='http://www.convertworld.com/es/'/>                          
              <BtnLink icono={estilos.Ico_HorariosMundo} texto='Horarios de            Mundo' link='https://www.timeanddate.com/worldclock/'/>           
          </View>         
        </View>

      </ScrollView>
    );
  }
}
