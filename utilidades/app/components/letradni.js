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

export default class letradni extends Component {
  
  componentDidMount(){
    this.props.fnLetraDNI({dni:''});
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{margin:0, flex: 2}} >
      
        <View style={{ flexDirection:'row', margin: 0, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL}} >          
          <Button  transparent onPress={() => this.props.onItemSelected(pages.UTILIDADES)}>
                <Icon style={{color:'white'}} name="arrow-round-back"/>
          </Button>  
          <View style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
            <Text style={{ fontSize: 20, textAlign:'center', color:'white',fontFamily: "Merriweather-Regular" }}>Calcular letra DNI</Text>                 
          </View>
        </View>

         <View style={{ flexDirection: 'column', margin:30,  padding:20}} >

            <View style={{ flex: 1, maxHeight: 70, backgroundColor: estilos.Fondo_PRINCIPAL, padding: 5 }} >
              <Text style={styles.tituloUtilidades}>Nº DNI</Text>
              <Item>
                <Input style={{textAlign:'center', borderBottomColor:'lightgray', borderBottomWidth:0.5, height:40,marginLeft:50,marginRight:50,fontFamily: "Merriweather-Regular"}}
                    keyboardType="numeric" 
                    onChangeText={dni => this.props.fnLetraDNI({dni})}
                    maxLength={8}/>  
              </Item>
            </View>

            <View style={{ flex: 1, maxHeight: 70, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL, padding: 15, marginTop:10 }} >
                <Text style={[styles.tituloUtilidades,{color:estilos.FondoTituloCabecera_UTILIDADES}]}>LETRA</Text>
                <Text style={{ fontSize: 16, textAlign: 'center', color:'white', margin:5, fontWeight: 'bold',fontFamily: "Merriweather-Regular"}}>{this.props.letradni.data}</Text>
            </View>         
         
         </View>
       
      </View>
      </ScrollView>
    );
  }
}
