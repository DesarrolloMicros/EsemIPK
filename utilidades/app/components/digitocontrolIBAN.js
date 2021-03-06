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

export default class DigitocontrolIBAN extends Component {

  constructor(props) {  
    super(props);

    this.state = {Entidad:'',
                  Sucursal:'',
                  DC:'',
                  NumCuenta:''
                };
  }  
  
  componentDidMount(){
    this.props.fnDCIBAN('','','','');
  }

  _onChangeText_Entidad(d){
   this.setState({Entidad:d});
   this.props.fnDCIBAN ( d, this.state.Sucursal, this.state.DC, this.state.NumCuenta)
 } 
 _onChangeText_Sucursal(d){
   this.setState({Sucursal:d});   
   this.props.fnDCIBAN ( this.state.Entidad, d, this.state.DC, this.state.NumCuenta)
 }
 _onChangeText_DC(d){
   this.setState({DC:d});
   this.props.fnDCIBAN ( this.state.Entidad, this.state.Sucursal, d, this.state.NumCuenta)
 }
_onChangeText_NumCuenta(d){
   this.setState({NumCuenta:d});
   this.props.fnDCIBAN ( this.state.Entidad, this.state.Sucursal, this.state.DC,d)
 }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ margin: 0, flex: 1, }} >
        
          <Cabecera onPress={() => this.props.onItemSelected(pages.UTILIDADES)} 
                  Texto='Convertidor CCC-IBAN'
                  ColorFondo={estilos.FondoTituloCabecera_PRINCIPAL}/>
          <View style={{ flexDirection: 'column', marginTop:30,  padding:20}} >
            <View style={{ flex: 3, flexDirection: 'row', marginTop: 20 }} >

              <View style={{ flex: 1 }}>
                <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderRightWidth: 1, borderBottomWidth: 1 }}>
                  <Text style={styles.tituloUtilidades}>ENTIDAD</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Input style={[styles.inputNumerico, {minWidth:50}]}
                      keyboardType="numeric"
                      onChangeText={Entidad => this._onChangeText_Entidad(Entidad)}
                      maxLength={4} />
                  </View>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderRightWidth: 1, borderBottomWidth: 1 }}>
                  <Text style={styles.tituloUtilidades}>SUCURSAL</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Input style={[styles.inputNumerico, {minWidth:50}]}
                      keyboardType="numeric"
                      onChangeText={Sucursal => this._onChangeText_Sucursal(Sucursal)}
                      maxLength={4} />
                  </View>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderBottomWidth: 1 }}>
                  <Text style={styles.tituloUtilidades}>DC</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Input style={[styles.inputNumerico, {minWidth:40}]}
                      keyboardType="numeric"
                      onChangeText={DC => this._onChangeText_DC(DC)}
                      maxLength={2} />
                  </View>
                </View>
              </View>

            </View>

            <View style={{ flex: 1, marginTop:10}}>
                  <View style={{ borderColor: estilos.Fondo_PRINCIPAL,}}>
                    <Text style={styles.tituloUtilidades}>Nº CUENTA</Text>
                    <View style={{ alignItems: 'center', padding:5 }}>
                      <Input style={[styles.inputNumerico, {minWidth:120}]}
                        keyboardType="numeric"
                        onChangeText={NumCuenta => this._onChangeText_NumCuenta(NumCuenta)}
                        maxLength={10} />
                    </View>
                  </View>
            </View>

            <AreaResultado Texto='CÓDIGO IBAN' resultado={this.props.CodIBAN} />
          
          </View>
          
        </View>
      </ScrollView>
    );
  }
}
