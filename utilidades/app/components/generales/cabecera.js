import React, {Component} from 'react';

import { View, Text } from 'react-native';

import {
    Button,
    Icon as Icono
} from 'native-base';

export default class Cabecera extends Component {

    render() { 
        return (
            <View style={{ flexDirection:'row', padding: 0, backgroundColor: this.props.ColorFondo}} >          
                <Button style={{ marginTop: -6, marginBottom: -6}} transparent 
                    onPress={this.props.onPress}>
                    <Icono style={{color:'white'}} name="arrow-round-back"/>
                </Button>  
                <View style={{ flex:1,  alignItems:'center', justifyContent:'center', marginLeft: -40 }}>
                    <Text style={{ fontSize: 16, textAlign:'center', color:'white',fontFamily: "Merriweather-Regular", paddingTop: -15, paddingBottom: -15 }}>
                        {this.props.Texto}
                    </Text>                 
                </View>
            </View>
        );
    }
}