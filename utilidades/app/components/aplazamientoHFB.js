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

import Cabecera from './generales/cabecera';
import CampoFecha from './generales/campoFecha';

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
    const txtPeriodoVoluntario = 'PERIODO' + '\n' + 'VOLUNTARIO';

    return (
      <ScrollView style={{backgroundColor: 'white', }}>
        <View style={{ margin: 0, flex: 1}} >       
                
            <Cabecera onPress={() => this.props.onItemSelected(pages.UTILIDADES)} 
                  Texto='Aplazar deuda Hacienda'
                  ColorFondo={estilos.FondoTituloCabecera_PRINCIPAL}/>
                
                <View style={{ flexDirection: 'column', marginTop: Platform.OS === 'ios' ? 0 : 30, padding:20}} >

                    <View style={{ flex: 1, maxHeight: 82, backgroundColor: estilos.Fondo_PRINCIPAL, padding: 5 }} >
                        <Text style={styles.tituloUtilidades}>IMPORTE</Text>
                        <Item>
                            <Input style={styles.inputNumerico}
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
                        <CampoFecha Fecha={this.props.data.date} 
                                    name='date' 
                                    Texto={'FECHA' + '\n' + 'INICIO'} 
                                    onDateChange={this.props.onChange} />
                        
                        <CampoFecha Fecha={this.props.data.dateF} 
                                    name='dateF' 
                                    Texto={'FECHA' + '\n' + 'FINAL'} 
                                    onDateChange={this.props.onChange} />


                        <View style={{ flex: 1.2 }}>
                            <View>
                                <Text style={styles.tituloUtilidades}>{txtPeriodoVoluntario}</Text>
                                <View style={{ alignItems:'center', paddingRight:20, marginTop:20,}}>                                
                                    <CheckBox color={estilos.colorEsem} checked={this.props.data.pVoluntario} onPress={meses => this.props.onChange({ "name": "pVoluntario", "value": !this.props.data.pVoluntario })} />
                                </View>                                
                            </View>
                        </View>

                    </View> 

                    <View style={{ flex: 1,  marginTop:20}}>
                        <Text style={[styles.tituloUtilidades,{ color:estilos.Fondo_PRINCIPAL, fontFamily: "Merriweather-Black"}]}>CALENDARIO DE PAGOS</Text>                        
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
