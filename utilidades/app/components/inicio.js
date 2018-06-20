import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, Linking, TouchableOpacity, Image, Dimensions, Platform} from 'react-native';
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

const BtnLink = ({icono,texto,link}) => <TouchableOpacity style={{width:'46%',backgroundColor: estilos.Btn_backgroundColor ,padding:10, borderRadius:5}} onPress={() => Linking.openURL(link)}>
                                          <View style={{alignItems:'center'}}><Image style={{marginTop: 5,resizeMode:'contain',width:estilos.IconoBoton_WIDTH, height:estilos.IconoBoton_HEIGHT}} source={icono}/></View>
                                          <Text style={{color: 'white',textAlign:'center',fontSize:15, marginTop:0, padding:5, fontFamily: "Merriweather-Black"}}>{texto}</Text>
                                        </TouchableOpacity>  

                                        

const BtnPage = ({icono,texto, onItemSelected}) => <TouchableOpacity style={{width: (Platform.OS === 'ios' ? '92%' : '46%'),backgroundColor: estilos.Btn_backgroundColor,padding:10,borderRadius:5}} onPress={() => onItemSelected()}>
                                                    <View style={{alignItems:'center'}}><Image style={{marginTop: 5,width:estilos.IconoBoton_WIDTH,height:estilos.IconoBoton_HEIGHT}} source={icono}/></View>
                                                    <Text style={{color: 'white', textAlign:'center',fontSize: 15, marginTop:0, padding:5, fontFamily: "Merriweather-Black"}}>{texto}</Text>
                                                  </TouchableOpacity>

var screen = Dimensions.get('window');

export default class inicio extends Component {
  
  constructor(props) {  
    super(props);

    this.state={height:screen.height,width:screen.width};
    this._onLayout=this._onLayout.bind(this);
  } 

  _onLayout(event){
    const {width,height}=event.nativeEvent.layout;
    this.setState({height:height,width: width});
  }

  render() {
    const txtAreaClientes = 'Área de' + ((this.state.width>this.state.height)? ' ' : '\n') + 'clientes';
    const txtEnlacesExt = 'Enlaces' + ((this.state.width>this.state.height)? ' ' : '\n') + 'externos';
    return (
      <ScrollView style={{ backgroundColor: estilos.Fondo_PRINCIPAL}} onLayout={this._onLayout}>
        <View style={{ margin: 0, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL, padding:10}} >
          <Text style={{ fontSize: 16, textAlign:'center', color:'white',fontFamily: "Merriweather-Regular" }}>
            Asesoría, consultoría y servicios jurídicos
          </Text>       
        </View>

        <View style={{marginLeft:20, marginRight:20, marginTop:20}}>

          <View style={{height:210, justifyContent:'center', marginBottom:15}} >
            { Platform.OS === 'ios' ?
              <View></View>
              :
              <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:15, marginTop:80}}>
                <BtnLink icono= {estilos.Ico_PortalEmpleado} texto='Portal del empleado' link='https://portal.esem-empresas.net/portal'/>
                <BtnLink icono= {estilos.Ico_AreaClientes} texto={txtAreaClientes} link='https://portal.esem-empresas.net/areacliente/Login.aspx'/>
              </View>
            }
            { Platform.OS === 'ios' ?
              <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:80}}>
                <BtnPage icono= {estilos.Ico_UtilidadesContables} texto='Utilidades contables' onItemSelected={() => this.props.onItemSelected(pages.UTILIDADES)}/>
              </View>
              :
              <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:80}}>
                <BtnPage icono= {estilos.Ico_UtilidadesContables} texto='Utilidades contables' onItemSelected={() => this.props.onItemSelected(pages.UTILIDADES)}/>            
                <BtnPage icono= {estilos.Ico_EnlacesExternos} texto={txtEnlacesExt} onItemSelected={() => this.props.onItemSelected(pages.ENLACES_EXT)}/>           
              </View>
            }
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
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538181')}>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 81 81</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black", marginTop:10}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:secretaria@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>secretaria@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black", marginTop:10}}>WhatsApp</Text>
            <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=650467124')}>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>650467124</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoFiscal"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoFiscal.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538181')}>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 81 81</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black", marginTop:10}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:secretaria@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>secretaria@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black", marginTop:10}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 494 15 73</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoLaboral"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoLaboral.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538182')}>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 81 82</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black", marginTop:10}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:laboral@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>laboral@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black", marginTop:10}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 19 50</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoContabilidad"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoContabilidad.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538183')}>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 81 83</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Black"}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:contabilidad@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>contabilidad@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Black"}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 82 78</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>

        <Modal ref={"modalDepartamentoJuridico"} style={[styles.modal]} position={"center"} >
          <Button transparent onPress={() => this.refs.modalDepartamentoJuridico.close()} style={[styles.btn, styles.btnModal]}><Text style={styles.btnClosemodal}>X</Text></Button>          

          <View style={{alignItems: 'center' }}>
            <Text style={{color:estilos.tituloModal, fontFamily: "Merriweather-Black"}}>Llamar</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:944538181')}>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 81 81</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Black"}}>Enviar e-mail</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:abogados@esem-empresas.net')}>
              <Text style={{color:estilos.datoModal, fontFamily: "Merriweather-Regular"}}>abogados@esem-empresas.net</Text>
            </TouchableOpacity>
            <Text style={{color:estilos.tituloModal, marginTop:10, fontFamily: "Merriweather-Black"}}>Fax</Text>
            <TouchableOpacity>
              <Text style={{color:estilos.datoModal, fontFamily: "RobotoCondensed-Bold"}}>94 453 36 60</Text>
            </TouchableOpacity>
          </View>
             
        </Modal>       

      </ScrollView>
    );
  }
}

