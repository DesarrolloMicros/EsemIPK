import React, {Component} from 'react';
import { 
    Platform,
    ScrollView, 
    View,
    Text,
    TextInput
} from 'react-native';

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

import * as pages from '../constants/navigation';

import Pie from './piechart/charts/Pie';
import {redondear} from '../helpers/funcionesgenerales';

import styles from '../css/app';
import * as estilos from '../constants/styles';

import * as fn  from '../helpers/funcionesgenerales';

export default class calcprestamos extends Component {
  constructor (props) {
        super(props);

        this.defaultData  =  {
            "importe" : '',
            "interes" : '',
            "plazo" : '',
            "meses" : 12
        };
    
        this.state = {
            importe: '0',
            interes: '0',
            plazoAño:'0',
            plazoMes:'0',
            data : this.defaultData,
            series :[],
            activeIndex: 0
        };

        this._onPieItemSelected = this._onPieItemSelected.bind(this);
        this._onBlur_Importe = this._onBlur_Importe.bind(this);
        this._onFocus_Importe = this._onFocus_Importe.bind(this);
    }
    componentDidMount(){
        this.props.fnCalcPagoPrestamo('', '', '', '');
    }
    
    _onPieItemSelected(newIndex){
        this.setState({...this.state, activeIndex: newIndex});
    }

    onChange (data) {
        //console.log('data' , data);
        let stateData = JSON.parse(JSON.stringify(this.state.data))

        if (stateData[data.name] !== data.value){
            stateData[data.name] = data.value;

            this.setState({
                data : stateData
            });
            this.props.fnCalcPagoPrestamo(stateData["importe"], stateData["interes"], stateData["plazo"], stateData["meses"]);
        }
    }

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

    componentWillReceiveProps (newProps){
      //console.log('newProps',newProps);

      /* GP00: 24/04/2018
      if (this.state.data.importe !== '' && this.state.data.interes !=='' && this.state.data.plazo !== ''){
          var vTotal = redondear(100 * parseInt(this.state.data.importe) / (parseInt(this.state.data.importe) + parseInt(newProps.calcprestamo.data.interestotal)), 1);
          var vInteres = redondear(100 * parseInt(newProps.calcprestamo.data.interestotal) / (parseInt(this.state.data.importe) + parseInt(newProps.calcprestamo.data.interestotal)), 1);
          this.setState(
                {series :[
                    {"number": vInteres, "name":"Intereses"},
                    {"number": vTotal, "name":"Capital Amortizado"}, 
                ]});
      }*/

        if (newProps.calcprestamo.data.importe !== '' && newProps.calcprestamo.data.interes !=='' && newProps.calcprestamo.data.plazo !== ''){
            var vTotal = redondear(100 * parseInt(newProps.calcprestamo.data.importe) / (parseInt(newProps.calcprestamo.data.importe) + parseInt(newProps.calcprestamo.data.interestotal)), 1);
            var vInteres = redondear(100 * parseInt(newProps.calcprestamo.data.interestotal) / (parseInt(newProps.calcprestamo.data.importe) + parseInt(newProps.calcprestamo.data.interestotal)), 1);
            this.setState(
                    {series :[
                        {"number": (newProps.calcprestamo.data.pagostotal == 0 ? 0 : vInteres) , "name":"% INTERESES"},
                        {"number": (newProps.calcprestamo.data.pagostotal == 0 ? 0 : vTotal), "name":'CAPITAL' + '\n' + 'AMORTIZADO'}, 
                    ]});
        }
    }

  render() {

    const { calcprestamo } = this.props;
    
    const data = [
        {"number":  100000, "name": 'Importe Total'},
        {"number": 1700, "name": 'Intereses'}
    ];
  
    var colors = ['#c08e11', '#0d372c'];

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{ margin: 0, flex: 1}} >
            <Cabecera onPress={() => this.props.onItemSelected(pages.UTILIDADES)} 
                  Texto='Calculadora de Préstamos'
                  ColorFondo={estilos.FondoTituloCabecera_PRINCIPAL}/>
            
            <View style={{ flexDirection: 'column', marginTop: Platform.OS === 'ios' ? 10 : 30, padding:20}} >

                <View style={{ flex: 1, height: 82, backgroundColor:'#e3e1da', padding:5}} >
                    <Text style={styles.tituloUtilidades}>IMPORTE PRÉSTAMO</Text>
                    <Item>                
                        <Input style={styles.inputNumerico}
                            keyboardType="numeric"
                            maxLength={15}
                            selectTextOnFocus={true}                           
                            onChangeText={importe => {this.onChange({"name": "importe", "value": importe});this.setState({importe:importe})}}
                            onBlur={this._onBlur_Importe}
                            onFocus={this._onFocus_Importe}
                            value={this.state.importe}/>                  
                    </Item>
                </View>

                <View style={{ flex: 3, flexDirection:'row',  marginTop:20 }} >

                    <View style={{flex:1}}>
                        <View style={{ borderColor:'#e3e1da', borderBottomWidth:1,borderRightWidth:1}}>
                            <Text style={styles.tituloUtilidades}>{'INTERÉS' + '\n' + 'ANUAL %'}</Text>
                            <Item >
                                <Input style={[styles.inputUtilidades,{fontFamily: "Roboto-Regular"}]}
                                keyboardType="numeric"
                                maxLength={3}
                                value={this.state.interes }
                                onChangeText={interes => {this.onChange({"name": "interes", "value": interes});this.setState({interes:interes})}}
                                />
                            </Item>
                        </View>
                        <View style={{borderColor:'#e3e1da', borderRightWidth:1, height:80}}>
                            <Text style={[styles.tituloUtilidades,{marginTop:5}]}>{'CUOTA' + '\n' + 'MENSUAL'}</Text>
                            <Text style={[styles.inputUtilidades,{marginTop:10,fontSize:14,fontFamily: "Roboto-Regular"}]}>{calcprestamo && fn.FormatoMoneda(calcprestamo.data.cmensual) + ' €'}</Text>
                        </View>                
                    </View>

                    <View style={{flex:1}}>
                        <View style={{ borderColor:'#e3e1da', borderBottomWidth:1,borderRightWidth:1}}>
                            <Text style={styles.tituloUtilidades}>{'PLAZO' + '\n' + 'AÑOS'}</Text>
                            <Item >
                                <Input style={[styles.inputUtilidades,{fontFamily: "Roboto-Regular"}]}
                                keyboardType="numeric"
                                maxLength={3}
                                value={this.state.plazoAño}
                                onChangeText={plazo => {
                                        this.onChange({"name": "plazo", "value": plazo});
                                        this.onChange({"name": "meses", "value": 12});
                                        this.setState({plazoAño:plazo, plazoMes:''})}
                                    }
                                />
                            </Item>
                        </View>
                        <View style={{borderColor:'#e3e1da', borderRightWidth:1, height:80}}>
                            <Text style={[styles.tituloUtilidades,{marginTop:5}]}>{'INTERÉS' + '\n' + 'TOTAL'}</Text>
                            <Text style={[styles.inputUtilidades,{marginTop:10,fontSize:14,fontFamily: "Roboto-Bold"}]}>{calcprestamo && fn.FormatoMoneda(calcprestamo.data.interestotal)+ ' €'}</Text>
                        </View>                
                    </View>

                    <View style={{flex:1}}>
                        <View style={{ borderColor:'#e3e1da', borderBottomWidth:1,}}>
                            <Text style={styles.tituloUtilidades}>{'PLAZO' + '\n' + 'MESES'}</Text>
                            <Item >
                                <Input style={[styles.inputUtilidades,{fontFamily: "Roboto-Regular"}]}
                                keyboardType="numeric"
                                maxLength={3}
                                value={this.state.plazoMes}
                                onChangeText={plazo => {
                                        this.onChange({"name": "plazo", "value": plazo});
                                        this.onChange({"name": "meses", "value": 1});
                                        this.setState({plazoMes:plazo, plazoAño:''})}
                                    }
                                />
                            </Item>
                        </View>
                        <View style={{borderColor:'#e3e1da', height:80}}>
                            <Text style={[styles.tituloUtilidades,{marginTop:5}]}>{'PAGO' + '\n' + 'TOTAL'}</Text>
                            <Text style={[styles.inputUtilidades,{marginTop:10,fontSize:14,fontFamily: "Roboto-Bold"}]}>{calcprestamo && fn.FormatoMoneda(calcprestamo.data.pagostotal)+ ' €'}</Text>
                        </View>                
                    </View>
        
                </View>  

                <View style={{ flex: 1,  marginTop:10}} >

                    <View>
                        <Pie
                        pieWidth={150}
                        pieHeight={150}
                        onItemSelected={this._onPieItemSelected}
                        colors={colors}
                        width={500}
                        height={200}
                        data={this.state.series} />                
                    </View>
                    
                </View>           

            </View>

        </View>      
      </ScrollView>
    );
  }
}