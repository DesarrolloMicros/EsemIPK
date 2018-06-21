import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Dimensions, TouchableHighlight, Linking, Platform} from 'react-native';
//import { Icon } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../css/menu';
import * as estilos from '../constants/styles';

import * as pages from '../constants/navigation';

const linkPortalEmpleado='https://portal.esem-empresas.net/portal'
const linkAreaClientes='https://portal.esem-empresas.net/areacliente/Login.aspx'
const linkEsem='http://www.esem-empresas.net/';

export default class Menu extends Component {
    /*
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };
  */

  render() {
    const window = Dimensions.get('window');
    const logo = require('../resources/logo-e-w.png');
    const SO = 'android';
    
    return (
        <ScrollView scrollsToTop={false} style={{fontSize: 20}} style={styles.menu} >

            <TouchableHighlight onPress={() => (Platform.OS === SO ? this.props.onItemSelected(pages.INICIO):Linking.openURL(linkEsem))} style={styles.touchable} underlayColor={'#5c5042'}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={logo} />
                    {/* <Text style={styles.name}>Asesoria ESEM</Text> */}
                </View>
            </TouchableHighlight>
            { Platform.OS === SO ? <View></View> :
            <TouchableHighlight onPress={() => Linking.openURL(linkPortalEmpleado)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>                    
                    <View style={{ alignItems: 'center' }}><Image style={{resizeMode:'contain', width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_PortalEmpleado} /></View>
                    <Text style={styles.textMenu}>Portal del Empleado</Text>
                </View>
            </TouchableHighlight>
            }
            { Platform.OS === SO ? <View></View> :
            <TouchableHighlight onPress={() => Linking.openURL(linkAreaClientes)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>
                    <View style={{ alignItems: 'center' }}><Image style={{ resizeMode:'contain',width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_AreaClientes} /></View>
                    <Text style={styles.textMenu}>Área Clientes</Text>
                </View>
            </TouchableHighlight>
            }
            <TouchableHighlight onPress={() => this.props.onItemSelected(pages.UTILIDADES)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>
                    <View style={{ alignItems: 'center' }}><Image style={{resizeMode:'contain', width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_UtilidadesContables} /></View>
                    <Text style={styles.textMenu}>Utilidades</Text>
                </View>
            </TouchableHighlight>
            { Platform.OS === SO ? <View></View> :
            <TouchableHighlight onPress={() => this.props.onItemSelected(pages.ENLACES_EXT)} style={styles.touchable} underlayColor={'#5c5042'}>
                <View  style={[styles.itemMenu,{flexDirection:'row'}]}>
                    <View style={{ alignItems: 'center' }}><Image style={{ resizeMode:'contain',width: estilos.IconoBoton_WIDTH, height: estilos.IconoBoton_HEIGHT }} source={estilos.Ico_EnlacesExternos} /></View>
                    <Text style={styles.textMenu}>Enlaces Externos</Text>
                </View>
            </TouchableHighlight>
            }
        </ScrollView>
    );
  }

  
};