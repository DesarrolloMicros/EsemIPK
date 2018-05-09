import React, {Component} from 'react';
import {Platform,ScrollView, View, Text, WebView} from 'react-native';

import styles from '../css/app';
import DatePicker from 'react-native-datepicker';
//import DatePicker from './DatePicker';

import {
    Item,
    Label,
    Input,
    ListItem,
    Radio,
    CheckBox,
    Button,
    Icon
} from 'native-base';

import * as pages from '../constants/navigation';

import Tabla from './table';
import * as estilos from '../constants/styles';

import * as fn  from '../helpers/funcionesgenerales';

//import './../css/aplazamientoHFB';

export default class aplazamientoHFB extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
            importe: '0',
        };
        
        this._onBlur_Importe = this._onBlur_Importe.bind(this);
        this._onFocus_Importe = this._onFocus_Importe.bind(this);
    }
  
  static defaultProps = {
    onChange: undefined
  };

  _onBlur_Importe (){ 
    var importe = this.state.importe; 
    if (!fn.isnull(importe)) {
       importe= fn.FormatoMoneda(importe);
       this.setState({importe}); 
    }               
}

_onFocus_Importe (){         
    var importe = this.state.importe; 
    if (!fn.isnull(importe)) {
        if (Platform.OS=='android'){//ANDROID            
          importe= importe.split('.').join('').replace(',','.');
        }else{ //IOS
          importe= importe.split('.').join('');
        }        
        this.setState({importe});    
      } 
}
  
  render() {
    
    return (
      <ScrollView style={{backgroundColor: 'white', }}>
        <View style={{ margin: 0, flex: 1}} >       
                
                <View style={{ flexDirection:'row', margin: 0, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL}} >          
                    <Button  transparent onPress={() => this.props.onItemSelected(pages.UTILIDADES)}>
                            <Icon style={{color:'white'}} name="arrow-round-back"/>
                    </Button>  
                    <View style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
                        <Text style={{ fontSize: 20, textAlign:'center', color:'white',fontFamily: "Merriweather-Regular" }}>Aplazar deuda Hacienda</Text>                 
                    </View>
                </View>

                <View style={{ flexDirection: 'column', margin:30,  padding:20}} >

                    <View style={{ flex: 1, maxHeight: 70, backgroundColor: estilos.Fondo_PRINCIPAL, padding: 5 }} >
                        <Text style={styles.tituloUtilidades}>IMPORTE</Text>
                        <Item>
                            <Input style={{ fontSize: 16, textAlign: 'center',fontFamily: "Roboto-Regular" }}
                                keyboardType="numeric"
                                maxLength={15}
                                selectTextOnFocus={true}
                                onChangeText={importe => { this.props.onChange({ "name": "importe", "value": importe }); this.setState({ importe: importe }) }}
                                onBlur={this._onBlur_Importe}
                                onFocus={this._onFocus_Importe}
                                value={this.state.importe} />
                        </Item>
                    </View>

                    <View style={{ flex: 3, flexDirection: 'row', marginTop: 20, }} >

                        <View style={{ flex: 1 }}>
                            <View style={{ borderColor: estilos.Fondo_PRINCIPAL, borderRightWidth: 1 }}>
                                <Text style={styles.tituloUtilidades}>FECHA          INICIO</Text>
                                <View style={{ alignItems:'center'}}>
                                    <DatePicker style={{width:85}}
                                        date={this.props.data.date}
                                        showIcon={false}
                                        mode="date"
                                        placeholder="fecha inicio"
                                        format="DD/MM/YYYY"
                                        confirmBtnText="Aceptar"
                                        cancelBtnText="Cancelar"
                                        androidMode="spinner"
                                        onDateChange={(date) => this.props.onChange({ "name": "date", "value": date })}
                                        customStyles={{
                                            dateInput: {
                                                borderWidth: 0,
                                                borderBottomWidth: 0.5,
                                                borderBottomColor: 'grey',
                                                height: 30
                                            },
                                            dateText: {
                                                fontSize: 14,
                                            },
                                            dateTouchBody: {
                                                height: 60,
                                                paddingBottom: 10
                                            }
                                        }} />
                                </View>                                
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={{ borderColor: estilos.Fondo_PRINCIPAL,  borderRightWidth: 1 }}>
                                <Text style={styles.tituloUtilidades}>FECHA          FINAL</Text>
                                <View style={{ alignItems:'center'}}>
                                    <DatePicker style={{width:85}}
                                        date={this.props.data.dateF}
                                        showIcon={false}
                                        mode="date"
                                        placeholder="fecha final"
                                        format="DD/MM/YYYY"
                                        confirmBtnText="Aceptar"
                                        cancelBtnText="Cancelar"
                                        androidMode="spinner"
                                        onDateChange={(date) => this.props.onChange({ "name": "dateF", "value": date })}
                                        customStyles={{
                                            dateInput: {
                                                borderWidth: 0,
                                                borderBottomWidth: 0.5,
                                                borderBottomColor: 'grey',
                                                height: 30,
                                            },
                                            dateText: {
                                                fontSize: 14,
                                            },
                                            dateTouchBody: {
                                                height: 60,
                                                paddingBottom: 10
                                            }
                                        }} />
                                </View>
                            </View>

                        </View>

                        <View style={{ flex: 1 }}>
                            <View>
                                <Text style={styles.tituloUtilidades}>PERIODO          VOLUNTARIO</Text>
                                <View style={{ alignItems:'center', paddingRight:20, marginTop:20,}}>                                
                                    <CheckBox checked={this.props.data.pVoluntario} onPress={meses => this.props.onChange({ "name": "pVoluntario", "value": !this.props.data.pVoluntario })} />
                                </View>                                
                            </View>
                        </View>

                    </View> 

                    <View style={{ flex: 1,  marginTop:20}}>
                        <Text style={[styles.tituloUtilidades,{ color:estilos.Fondo_PRINCIPAL}]}>CALENDARIO DE PAGOS</Text>                        
                        <Text style={[{textAlign:'center', fontSize:12, color:estilos.colorEsem,fontFamily: "Merriweather-Regular"}]}>{this.props.limitesHFB.data.texto1} <Text style={[{textAlign:'center',fontFamily: "Merriweather-Regular", fontSize:12, color: estilos.colorEsem,fontWeight: 'bold'}]}> {this.props.limitesHFB.data.texto2} </Text> {this.props.limitesHFB.data.texto3}</Text>
                        <View style={{marginTop:10}} >
                            <Tabla {...this.props} dataSource={this.props.aplazamientoHFB.data} />
                        </View>
                    </View>

                </View>

        </View>
      </ScrollView>
    );
  }

}
