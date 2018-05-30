import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

import {
    ListItem,
    Radio,
    Item,
    Label,
    Input,
    Button,
    Icon
} from 'native-base';

import Cabecera from './generales/cabecera';
import AreaResultado from './generales/areaResultado';

import * as pages from '../constants/navigation';

import styles from '../css/app';
import * as estilos from '../constants/styles';

export default class letradni extends Component {
  
  componentDidMount(){
    this.props.fnLetraDNI({dni:''});
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{margin:0, flex: 2}} >
        
        <Cabecera onPress={() => this.props.onItemSelected(pages.UTILIDADES)} 
                  Texto='Calcular letra DNI'
                  ColorFondo={estilos.FondoTituloCabecera_PRINCIPAL}/>
        
         <View style={{ flexDirection: 'column', marginTop:20,  padding:20}} >

            <View style={{ flex: 1, height: 82, backgroundColor: estilos.Fondo_PRINCIPAL, padding: 5 }} >
              <Text style={styles.tituloUtilidades}>Nº DNI</Text>
              <Item>
                <Input style={styles.inputNumerico}
                    keyboardType="numeric" 
                    onChangeText={dni => this.props.fnLetraDNI({dni})}
                    maxLength={8}/>  
              </Item>
            </View>

            <AreaResultado Texto='LETRA' resultado={this.props.letradni.data} />
         
         </View>
       
      </View>
      </ScrollView>
    );
  }
}
