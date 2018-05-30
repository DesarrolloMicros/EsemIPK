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

export default class digitocontrolSS extends Component {
  
  componentDidMount(){
    this.props.fnDC('');
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ margin: 0, flex: 1, }} >
        
          <Cabecera onPress={() => this.props.onItemSelected(pages.UTILIDADES)} 
                  Texto='Dígito control Seguridad Social'
                  ColorFondo={estilos.FondoTituloCabecera_PRINCIPAL}/>

          <View style={{ flexDirection: 'column', marginTop:30,  padding:20}} >

           <View style={{ flex: 1, marginTop:20}}>
                  <View style={{ borderColor: estilos.Fondo_PRINCIPAL,}}>
                    <Text style={styles.tituloUtilidades}>Nº SEGURIDAD SOCIAL</Text>
                    <View style={{ alignItems: 'center' }}>
                      <Input style={[styles.inputNumerico, {minWidth:130}]}
                        keyboardType="numeric"
                        onChangeText={numSS =>this.props.fnDC(numSS) }
                        maxLength={10} />
                    </View>
                  </View>
            </View>

            <AreaResultado Texto='DÍGITO CONTROL' resultado={this.props.dc.data} />
          
          </View>

        </View>
      </ScrollView>
    );
  }
}
