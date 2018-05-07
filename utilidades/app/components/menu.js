import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Dimensions, TouchableHighlight,Linking,} from 'react-native';
//import { Icon } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/menu';
import * as estilos from '../constants/styles';

import * as pages from '../constants/navigation';

const linkPortalEmpleado='https://portal.esem-empresas.net/portal'
const linkAreaClientes='https://portal.esem-empresas.net/areacliente/Login.aspx'

export default class Menu extends Component {
    /*
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };
  */

  render() {
    const window = Dimensions.get('window');
    const logo = require('../resources/logo-e-w.png');
    
    return (
        <ScrollView scrollsToTop={false} style={{fontSize: 20}} style={styles.menu} >

            <TouchableHighlight onPress={() => this.props.onItemSelected(pages.INICIO)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={logo}/>
                    <Text style={styles.name}>Asesoria ESEM</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL(linkPortalEmpleado)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>                    
                    <View style={{ alignItems: 'center' }}><Image style={{resizeMode:'contain', width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_PortalEmpleado} /></View>
                    <Text style={styles.textMenu}>Portal del Empleado</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => Linking.openURL(linkAreaClientes)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>
                    <View style={{ alignItems: 'center' }}><Image style={{ resizeMode:'contain',width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_AreaClientes} /></View>
                    <Text style={styles.textMenu}>Área Clientes</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.props.onItemSelected(pages.UTILIDADES)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>
                    <View style={{ alignItems: 'center' }}><Image style={{resizeMode:'contain', width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_UtilidadesContables} /></View>
                    <Text style={styles.textMenu}>Utilidades</Text>
                </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => this.props.onItemSelected(pages.ENLACES_EXT)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>
                    <View style={{ alignItems: 'center' }}><Image style={{ resizeMode:'contain',width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_EnlacesExternos} /></View>
                    <Text style={styles.textMenu}>Enlaces Externos</Text>
                </View>
            </TouchableHighlight>

        </ScrollView>
    );
  }

  
};