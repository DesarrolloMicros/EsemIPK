import React, {Component} from 'react';

import { View, Text } from 'react-native';

import styles from '../../css/app';
import * as estilos from '../../constants/styles';

export default class Cabecera extends Component {
    
    render() { 
        //const resultado = (this.props.icon ? this.props.icon : )
        return (
            <View style={{ flex: 1, height: 82, backgroundColor: estilos.FondoTituloCabecera_PRINCIPAL, padding: 15, marginTop: 10 }} >
                <Text style={[styles.tituloUtilidades, { color: estilos.FondoTituloCabecera_UTILIDADES }]}>
                    {this.props.Texto}
                </Text>
                {this.props.icon ? 
                    this.props.icon : 
                    <Text style={{ fontSize: 16,fontFamily: "RobotoCondensed-Bold", textAlign: 'center', color: 'white', margin: 5, fontWeight: 'bold' }}>
                        {this.props.resultado || ''}
                    </Text>
                }
            </View>
        )
    }
}