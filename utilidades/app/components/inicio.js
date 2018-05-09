import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, Linking, TouchableOpacity,Image} from 'react-native';
import {
  Button ,
  Item,
  Label,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';

import * as pages from '../constants/navigation';
import * as estilos from '../constants/styles';

import styles from '../css/app';

/*
const BtnLink = ({icono,texto,link}) => <TouchableOpacity style={{width:'48%',backgroundColor: '#403322',padding:10,borderRadius:5}} onPress={() => Linking.openURL(link)}>
                                          <View style={{alignItems:'center'}}><Icon name={icono} style={{color:'rgba(255,255,255,0.95)',fontSize: 25}} /></View>
                                          <Text style={{color:'#c08e11', textAlign:'center',fontSize: 15, marginTop:5}}>{texto}</Text>
                                        </TouchableOpacity> 
                                        
const BtnPage = ({icono,texto, onItemSelected}) => <TouchableOpacity style={{width:'48%',backgroundColor: '#403322',padding:10,borderRadius:5}} onPress={() => onItemSelected()}>
                                                    <View style={{alignItems:'center'}}><Icon name={icono} style={{color:'rgba(255,255,255,0.95)',fontSize: 25}} /></View>
                                                    <Text style={{color:'#c08e11', textAlign:'center',fontSize: 15, marginTop:5}}>{texto}</Text>
                                                  </TouchableOpacity>                                       
                                        
*/                                        

const BtnLink = ({icono,texto,link}) => <TouchableOpacity style={{width:'48%',backgroundColor: estilos.Btn_backgroundColor ,padding:10, borderRadius:5}} onPress={() => Linking.openURL(link)}>
                                          <View style={{alignItems:'center'}}><Image style={{resizeMode:'contain',width:estilos.IconoBoton_WIDTH, height:estilos.IconoBoton_HEIGHT}} source={icono}/></View>
                                          <Text style={{color: estilos.Btn_Color,textAlign:'center',fontSize:15, marginTop:5, padding:5, fontFamily: "Merriweather-Regular"}}>{texto}</Text>
                                        </TouchableOpacity>  

                                        

const BtnPage = ({icono,texto, onItemSelected}) => <TouchableOpacity style={{width:'48%',backgroundColor: estilos.Btn_backgroundColor,padding:10,borderRadius:5}} onPress={() => onItemSelected()}>
                                                    <View style={{alignItems:'center'}}><Image style={{width:estilos.IconoBoton_WIDTH,height:estilos.IconoBoton_HEIGHT}} source={icono}/></View>
                                                    <Text style={{color:estilos.Btn_Color, textAlign:'center',fontSize: 15, marginTop:5, padding:5, fontFamily: "Merriweather-Regular"}}>{texto}</Text>
                                                  </TouchableOpacity>
                                        
export default class inicio extends Component {
  
  render() {

    return (
      <ScrollView style={{ backgroundColor: estilos.Fondo_PRINCIPAL}}>
        <View style={{ margin: 0, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL, padding:10}} >
          <Text style={{ fontSize: 16, textAlign:'center', color:'white',fontFamily: "Merriweather-Regular" }}>
            Asesoría, consultoría y servicios jurídicos
          </Text>       
        </View>

        <View style={{marginLeft:20, marginRight:20, marginTop:20}}>

          <View style={{height:210, justifyContent:'center', marginBottom:15}} >

            <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:15, marginTop:80}}>
              <BtnLink icono= {estilos.Ico_PortalEmpleado} texto='Portal del empleado' link='https://portal.esem-empresas.net/portal'/>
              <BtnLink icono= {estilos.Ico_AreaClientes} texto='Area de            clientes' link='https://portal.esem-empresas.net/areacliente/Login.aspx'/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:80}}>
              <BtnPage icono= {estilos.Ico_UtilidadesContables} texto='Utilidades contables' onItemSelected={() => this.props.onItemSelected(pages.UTILIDADES)}/>            
              <BtnPage icono= {estilos.Ico_EnlacesExternos} texto='Enlaces            externos' onItemSelected={() => this.props.onItemSelected(pages.ENLACES_EXT)}/>           
            </View>

          </View>  

          <TouchableOpacity onPress={() => this.refs.modalSecretaria.open()} style={{ backgroundColor: estilos.Btn_Secretaria_backgroundColor, flex: 1, padding: 5, margin:5, alignItems: 'center', borderRadius:5, marginTop:15, marginBottom:15 }}>
            <Text style={{color: '#bd9500', fontFamily: "Merriweather-Regular"}}>Secretaría</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.refs.modalDepartamentoFiscal.open()} style={{ backgroundColor: estilos.Btn_DepartamentoFiscal_backgroundColor, flex: 1, padding: 5, margin: 5, alignItems: 'center', borderRadius:5, marginBottom:15 }}>
            <Text style={{ color: 'white', fontFamily: "Merriweather-Regular" }}>Departamento Fiscal</Text>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => this.refs.modalDepartamentoLaboral.open()} style={{ backgroundColor: estilos.Btn_DepartamentoLaboral_backgroundColor, flex: 1, padding: 5, margin: 5, alignItems: 'center', borderRadius:5 , marginBottom:15}}>
            <Text style={{ color: 'white', fontFamily: "Merriweather-Regular" }}>Departamento Laboral</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.refs.modalDepartamentoContabilidad.open()} style={{ backgroundColor: estilos.Btn_DepartamentoContabilidad_backgroundColor, flex: 1, padding: 5, margin: 5, alignItems: 'center', borderRadius:5, marginBottom:15 }}>
            <Text style={{ color: 'white', fontFamily: "Merriweather-Regular" }}>Departamento Contabilidad</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.refs.modalDepartamentoJuridico.open()} style={{ backgroundColor: estilos.Btn_DepartamentoJuridico_backgroundColor, flex: 1, padding: 5, margin: 5, alignItems: 'center', borderRadius:5, marginBottom:15 }}>
            <Text style={{ color: 'white', fontFamily: "Merriweather-Regular" }}>Departamento Jurídico</Text>
          </TouchableOpacity>
         
        </View>

        <Modal ref={"modalSecretaria"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalSecretaria.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Regular"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538181')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 81 81</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:secretaria@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>secretaria@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10}}>Whashapp</Text>
            <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=650467124')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>650467124</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoFiscal"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoFiscal.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Regular"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538181')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 81 81</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:secretaria@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>secretaria@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 494 15 73</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoLaboral"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoLaboral.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Regular"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538182')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 81 82</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:laboral@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>laboral@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 19 50</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoContabilidad"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoContabilidad.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Regular"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538183')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 81 83</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:contabilidad@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>contabilidad@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 82 78</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoJuridico"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoJuridico.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Regular"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538181')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 81 81</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:abogados@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>abogados@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Regular"}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>94 453 36 60</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>       

      </ScrollView>
    );
  }
}

