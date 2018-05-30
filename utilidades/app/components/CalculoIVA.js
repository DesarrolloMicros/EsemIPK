import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

import {
    ListItem,
    Item,
    Label,
    Input,
    Icon,
    Button
} from 'native-base';

import Cabecera from './generales/cabecera';

import * as pages from '../constants/navigation';

import styles from '../css/app';
import * as estilos from '../constants/styles';

import * as fn  from '../helpers/funcionesgenerales';

export default class CalculoIVA extends Component {

  constructor(props) {  
    super(props);

    this.state = {CampoResultado:'',
                  Marca_BaseImponible:false,
                  BaseImponible:0,
                  Iva:0,Iva_Val:21,
                  IRPF:0,IRPF_Val:0,
                  RecargoEquivalencia:0,RecargoEquivalencia_Val:0,
                  Total:0,
                  //Marca_Total:false,
                };
  }  
  
  componentDidMount(){
   this.props.fnCalculoIVA('',0,21,0,0,0);    
  }

  componentWillReceiveProps(nextProps){
    var p= nextProps.data;
    this.setState({ CampoResultado:p.CampoResultado,
                    BaseImponible:p.BaseImponible,                   
                    Total:p.Total
                  });
  }

 _onChangeText_BaseImponible (d){
    this.setState({CampoResultado:'Total',Marca_BaseImponible:false, BaseImponible:d});
    //this.setState({});
    this.props.fnCalculoIVA ('Total', d, this.state.Iva_Val, this.state.IRPF_Val, this.state.RecargoEquivalencia_Val, this.state.Total)
 }
  _onFocus_BaseImponible (){  

    var BaseImponible = this.state.BaseImponible; 

    if (!fn.isnull(BaseImponible)) {
      if (Platform.OS=='android'){//ANDROID            
        BaseImponible= BaseImponible.split('.').join('').replace(',','.');
      }else{ //IOS
        BaseImponible= BaseImponible.split('.').join('');
      }        
      this.setState({BaseImponible});    
    } 
 }
 _onBlur_BaseImponible (){  
   var BaseImponible = this.state.BaseImponible; 
    if (!fn.isnull(BaseImponible)) {
      BaseImponible= fn.FormatoMoneda(BaseImponible);
      this.setState({BaseImponible});    
    }   
 }

 _onChangeText_Total(d){
  this.setState({CampoResultado:'BaseImponible', Marca_BaseImponible:true, Total:d});
  //this.setState({});
  this.props.fnCalculoIVA ('BaseImponible', this.state.BaseImponible, this.state.Iva_Val, this.state.IRPF_Val, this.state.RecargoEquivalencia_Val, d)
}
_onFocus_Total (){  

  var Total= this.state.Total;  
 
  if (!fn.isnull(Total)) {
    if (Platform.OS=='android'){//ANDROID            
      Total= Total.split('.').join('').replace(',','.');
    }else{ //IOS
      Total= Total.split('.').join('');
    }        
    this.setState({Total});    
  }   
}
_onBlur_Total (){  
 var Total = this.state.Total; 
  if (!fn.isnull(Total)) {
    Total= fn.FormatoMoneda(Total);
    this.setState({Total});    
  }   
}

 _onChangeText_IVA(d){
   this.setState({Iva_Val:d});
   this.props.fnCalculoIVA ( this.state.CampoResultado, this.state.BaseImponible, d, this.state.IRPF_Val, this.state.RecargoEquivalencia_Val, this.state.Total)
 } 
 _onChangeText_IRPF(d){
   this.setState({IRPF_Val:d});
   this.props.fnCalculoIVA ( this.state.CampoResultado, this.state.BaseImponible, this.state.Iva_Val, d, this.state.RecargoEquivalencia_Val, this.state.Total)
 }
 _onChangeText_Recargo(d){
   this.setState({RecargoEquivalencia_Val:d});
   this.props.fnCalculoIVA ( this.state.CampoResultado, this.state.BaseImponible, this.state.Iva_Val, this.state.IRPF_Val, d, this.state.Total)
 }

//  _Marca_BaseImponible(){
   
//    if (this.state.Marca_BaseImponible) {
//       return {fontSize: 16, textAlign:'center', fontFamily: "RobotoCondensed-Bold"};
//    }else{
//       return {fontSize: 16, textAlign:'center', fontFamily: "Roboto-Regular"};
//    }       
  
//  }
//   _Marca_Total(){
    
//     if (!this.state.Marca_BaseImponible) {
//       return {fontSize: 16, textAlign:'center', fontFamily: "RobotoCondensed-Bold"};
//    }else{
//       return {fontSize: 16, textAlign:'center', fontFamily: "Roboto-Regular"};
//    }     
  
//  }

  render() {
    const styleBaseImp = {fontSize: 16, textAlign:'center', fontFamily: (this.state.Marca_BaseImponible ? "RobotoCondensed-Bold" : "RobotoCondensed-Regular")};
    const styleTotal = {fontSize:  16, textAlign:'center', fontFamily: (this.state.Marca_BaseImponible ? "RobotoCondensed-Regular" : "RobotoCondensed-Bold")};

    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ margin: 0, flex: 1}} >         
        
          <Cabecera onPress={() => this.props.onItemSelected(pages.UTILIDADES)} 
                  Texto='Calculadora IVA'
                  ColorFondo={estilos.FondoTituloCabecera_PRINCIPAL}/>
          
          <View style={{ flexDirection: 'column', marginTop: Platform.OS === 'ios' ? 10 : 30, padding:20}} >
            
            <View style={{ flex: 1, height: 82, backgroundColor:'#e3e1da', padding:5}} >
              <Text style={styles.tituloUtilidades}>BASE IMPONIBLE</Text>
              <Item >                
                <Input style={styleBaseImp}
                  keyboardType="numeric"
                  maxLength={15}
                  selectTextOnFocus={true}
                  onChangeText={BaseImponible => this._onChangeText_BaseImponible(BaseImponible)}
                  onFocus={this._onFocus_BaseImponible.bind(this)}
                  onBlur={this._onBlur_BaseImponible.bind(this)}
                  value={this.state.BaseImponible.toString()} />                  
              </Item>
            </View>

            <View style={{ flex: 1, flexDirection:'row', height: 70, marginTop:20 }} >
              <View style={{flex:1}}>
                <View style={{ borderColor:'#e3e1da', borderBottomWidth:1,borderRightWidth:1}}>
                  <Text style={styles.tituloUtilidades}>{'%' + '\n' + 'IVA'}</Text>
                  <Item >
                    <Input style={[styles.inputUtilidades,{fontFamily: "Roboto-Regular"}]}
                      keyboardType="numeric"
                      maxLength={3}
                      value={this.state.Iva_Val.toString()}
                      onChangeText={Iva => this._onChangeText_IVA(Iva)}
                    />
                  </Item>
                </View>
                <View style={{borderColor:'#e3e1da', borderRightWidth:1, height:50}}>
                  <Text style={[styles.inputUtilidades,{marginTop:10,fontFamily: "Roboto-Regular"}]}>{this.props.data.Iva}</Text>
                </View>                
              </View>

              <View style={{ flex:1}}>
                <View style={{borderColor:'#e3e1da', borderBottomWidth:1,borderRightWidth:1}}>
                  <Text style={styles.tituloUtilidades}>{'%' + '\n' + 'IRPF'}</Text>
                  <Item >
                    <Input style={[styles.inputUtilidades,{fontFamily: "Roboto-Regular"}]}
                      keyboardType="numeric"
                      value={this.state.IRPF_Val.toString()}
                      onChangeText={IRPF => this._onChangeText_IRPF(IRPF)}
                      maxLength={3} />
                  </Item>
                </View>
                <View style={{borderColor:'#e3e1da', borderRightWidth:1, height:50}}>
                  <Text style={[styles.inputUtilidades,{marginTop:10,fontFamily: "Roboto-Regular"}]}>{this.props.data.IRPF}</Text>
                </View>
              </View>

              <View style={{flex:1.3}}>
                <View style={{borderColor:'#e3e1da', borderBottomWidth:1}}>
                  <Text style={styles.tituloUtilidades}>{'%' + '\n' + 'RECARGO'}</Text>
                  <Item >
                    <Input style={[styles.inputUtilidades,{fontFamily: "Roboto-Regular"}]}
                      keyboardType="numeric"
                      value={this.state.RecargoEquivalencia_Val.toString()}
                      onChangeText={Recargo => this._onChangeText_Recargo(Recargo)}
                      maxLength={3} />
                  </Item>
                </View>
                <View style={{height:50}}>
                  <Text style={[styles.inputUtilidades,{marginTop:10,fontFamily: "Roboto-Regular"}]}>{this.props.data.RecargoEquivalencia}</Text>
                </View>
              </View>              
            </View>

            <View style={{ flex: 1, height: 82, marginTop:60, backgroundColor:'#e3e1da', padding:5}} >
              <Text style={[styles.tituloUtilidades]}>TOTAL</Text>
              <Item >
                <Input style={styleTotal}
                  keyboardType="numeric"
                  maxLength={15}
                  selectTextOnFocus={true}
                  onChangeText={Total => this._onChangeText_Total(Total)}
                  onFocus={this._onFocus_Total.bind(this)}
                  onBlur={this._onBlur_Total.bind(this)}
                  value={this.state.Total.toString()}/>
              </Item>
            </View>  

          </View>          
          
        </View>
      </ScrollView>
    );
  }
}

