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
        
          <View style={{ flexDirection: 'row', margin: 0, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL }} >
            <Button transparent onPress={() => this.props.onItemSelected(pages.UTILIDADES)}>
              <Icon style={{ color: 'white' }} name="arrow-round-back" />
            </Button>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'white',fontFamily: "Merriweather-Regular" }}>Dígito control Seguridad Social</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'column', margin:30,  padding:20}} >

           <View style={{ flex: 1, marginTop:20}}>
                  <View style={{ borderColor: estilos.Fondo_PRINCIPAL,}}>
                    <Text style={styles.tituloUtilidades}>Nº SEGURIDAD SOCIAL</Text>
                    <View style={{ alignItems: 'center' }}>
                      <Input style={{textAlign:'center',fontFamily: "Merriweather-Regular",borderBottomColor:'lightgray', borderBottomWidth:0.5, height:40,}}
                        keyboardType="numeric"
                        onChangeText={numSS =>this.props.fnDC(numSS) }
                        maxLength={10} />
                    </View>
                  </View>
            </View>


            <View style={{ flex: 1, maxHeight: 70, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL, padding: 15, marginTop: 10 }} >
              <Text style={[styles.tituloUtilidades, { color: estilos.FondoTituloCabecera_UTILIDADES }]}>DÍGITO CONTROL</Text>
              <Text style={{ fontSize: 16,fontFamily: "Merriweather-Regular", textAlign: 'center', color: 'white', margin: 5, fontWeight: 'bold' }}>{this.props.dc.data || ''}</Text>
            </View>
          
          </View>

        </View>
      </ScrollView>
    );
  }
}
