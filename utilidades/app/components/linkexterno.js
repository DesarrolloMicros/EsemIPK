import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Linking, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';

export default class linkexterno extends Component {
  /*
  static propTypes = {
    urlLink: React.PropTypes.string,
    textoLink: React.PropTypes.string,
  }
  */
  _onPress (){
    Linking.openURL(this.props.urlLink).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <View style={{flexDirection: 'row'}}>
            <View style={{ padding:3, justifyContent: 'center'}} >
              {this.props.icon !== "" && <Icon name={this.props.icon} />}
            </View>
            <View style={{flex: 0.8}}>
              <Text style={{padding: 10, backgroundColor: 'white'}} >
                {this.props.textoLink}
              </Text>
            </View>
            <View style={{ padding:3, justifyContent: 'center'}} >
              <Icon name='ios-arrow-forward' /> 
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
