

import React, {Component} from 'react';

import { View, Text } from 'react-native';

import styles from '../../css/app';
import * as estilos from '../../constants/styles';
import DatePicker from 'react-native-datepicker';

export default class campoFecha extends Component {
    
        render() { 
            return (
                    <View style={{ flex: 1 }}>
                        <View style={{ borderColor: estilos.Fondo_PRINCIPAL,  borderRightWidth: 1 }}>
                            <Text style={styles.tituloUtilidades}>{'FECHA' + '\n' + 'FINAL'}</Text>
                            <View style={{ alignItems:'center'}}>
                                <DatePicker style={{width:90}}
                                    date={this.props.Fecha}
                                    showIcon={false}
                                    mode="date"
                                    placeholder="fecha final"
                                    format="DD/MM/YYYY"
                                    confirmBtnText="Aceptar"
                                    cancelBtnText="Cancelar"
                                    androidMode="spinner"
                                    onDateChange={(date) => this.props.onDateChange({ "name": this.props.name, "value": date })}
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
        );
    }
}