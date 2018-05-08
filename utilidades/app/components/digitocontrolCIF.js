import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

import {
    ListItem,
    Radio,
    Item,
    Label,
    Input,Icon,Button
} from 'native-base';

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
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ margin: 0, flex: 1}} >

          <View style={{ flexDirection: 'row', margin: 0, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL }} >
            <Button transparent onPress={() => this.props.onItemSelected(pages.UTILIDADES)}>
              <Icon style={{ color: 'white' }} name="arrow-round-back" />
            </Button>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'white',fontFamily: "Merriweather-Regular" }}>Comprobador CIF</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'column', margin: 30, padding: 20 }} >

            <View style={{ flex: 3, flexDirection: 'row', marginTop: 20 }} >

              <View style={{ flex: 1 }}>
                <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderRightWidth: 1, borderBottomWidth: 1 }}>
                  <Text style={styles.tituloUtilidades}>LETRA</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Input style={{ textAlign: 'center',fontFamily: "Merriweather-Regular", borderBottomColor:'lightgray', borderBottomWidth:0.5, height:40, marginBottom:5 }}                     
                      onChangeText={letra => this._onChangeText_Letra(letra)}
                      maxLength={1} />
                  </View>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderBottomWidth: 1 }}>
                  <Text style={styles.tituloUtilidades}>Nº CIF</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Input style={{ textAlign: 'center',fontFamily: "Merriweather-Regular", borderBottomColor:'lightgray', borderBottomWidth:0.5, height:40, minWidth:100, marginBottom:5}}
                      keyboardType="numeric"
                      onChangeText={cif => this._onChangeText_CIF(cif)}
                      maxLength={8} />
                  </View>
                </View>
              </View>            
            
            </View>

            <View style={{ flex: 1, minHeight: 100, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL, padding: 15, marginTop: 20 }} >
              <Text style={[styles.tituloUtilidades, { color: estilos.FondoTituloCabecera_UTILIDADES }]}>VÁLIDO</Text>
              <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
                { this.props.icono.data.icono !=''?  <View style={{alignItems:'center', justifyContent:'center',width:40,height:40, borderRadius:20, borderColor:'gray', borderWidth:2, backgroundColor:'transparent'}}><Icon name={this.props.icono.data.icono} style={{fontWeight: 'bold', color:this.props.icono.data.color, fontSize:50}}/></View>:null}
              </View>
            </View>

          </View>
        
        </View>
      </ScrollView>
    );
  }
}
