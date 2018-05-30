import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

import {
    ListItem,
    Radio,
    Item,
    Label,
    Input,Icon,Button
} from 'native-base';

import Cabecera from './generales/cabecera';
import AreaResultado from './generales/areaResultado';

import * as pages from '../constants/navigation';

import styles from '../css/app';
import * as estilos from '../constants/styles';

export default class digitocontrolCIF extends Component {

  constructor(props) {  
    super(props);

    this.state = {letra:'',
                  cif:''};
  }  
  componentDidMount(){
    this.props.fnDCCIF('','');
  }

  _onChangeText_Letra(letra){
    this.setState({letra})
    this.props.fnDCCIF(letra, this.state.cif);
  }

  _onChangeText_CIF(cif){
     this.setState({cif})
     this.props.fnDCCIF(this.state.letra, cif);
  }

  render() {
    //const resultado = (this.props.icono.data.icono !=''?  <View style={{alignItems:'center', justifyContent:'center',width:40,height:40, borderRadius:20, borderColor:'gray', borderWidth:2, backgroundColor:'transparent'}}><Icon name={this.props.icono.data.icono} style={{fontWeight: 'bold', color:this.props.icono.data.color, fontSize:50}}/></View>:null);
    const resultado = (this.props.icono.data.icono !=''?  <View style={{alignItems:'center', justifyContent:'center'}}><Icon name={this.props.icono.data.icono} style={{ fontWeight: 'bold', color: 'white', fontSize:50 }}/></View>:null);
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        
        <Cabecera onPress={() => this.props.onItemSelected(pages.UTILIDADES)} 
                          Texto='Comprobador CIF'
                          ColorFondo={estilos.FondoTituloCabecera_PRINCIPAL}/>
         <View style={{ margin: 0, flex: 1}} >

          <View style={{ flexDirection: 'column', marginTop: 30, padding: 20 }} >

            <View style={{ flex: 3, flexDirection: 'row', marginTop: 20 }} >

              <View style={{ flex: 1 }}>
                <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderRightWidth: 1, borderBottomWidth: 1 }}>
                  <Text style={styles.tituloUtilidades}>LETRA</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Input style={[styles.inputNumerico, {minWidth:30}]}                     
                      onChangeText={letra => this._onChangeText_Letra(letra)}
                      maxLength={1} />
                  </View>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderBottomWidth: 1 }}>
                  <Text style={styles.tituloUtilidades}>Nº CIF</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Input style={[styles.inputNumerico, {minWidth:130}]}
                      keyboardType="numeric"
                      onChangeText={cif => this._onChangeText_CIF(cif)}
                      maxLength={8} />
                  </View>
                </View>
              </View>            
            
            </View>
            
            <AreaResultado Texto='VÁLIDO' icon={resultado} />
            
          </View>
        
        </View>
      </ScrollView>
    );
  }
}
