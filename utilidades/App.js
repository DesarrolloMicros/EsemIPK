import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Image,
  View,
  BackAndroid
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import SideMenu from 'react-native-side-menu';
import NavigationBar from 'react-native-navbar';
import { Icon } from 'native-base';
import RNExitApp from 'react-native-exit-app';

import * as pages from './app/constants/navigation';
import * as estilos from './app/constants/styles';
import * as reducers from './app/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Menu from './app/components/menu';
import NavigateTo from './app/helpers/navigation';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      isOpen: false,
      selectedItem: pages.INICIO
    };
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  exitApp(){
    //BackAndroid.exitApp();
    RNExitApp.exitApp();
  }

  menu = <Menu onItemSelected={this.onMenuItemSelected}  navigator={navigator}/>;
  
  render() {

    const logoHeader=  this.state.selectedItem==pages.INICIO?<Image resizeMode='contain' style={{ width:estilos.LogoCabecera_WIDTH_Ini,height:estilos.LogoCabecera_HEIGHT_Ini, marginLeft: -45}} source={require('./app/resources/LogoCabeceraPrincipal.png')}/>: <Image resizeMode='contain' style={{width:estilos.LogoCabecera_WIDTH,height:estilos.LogoCabecera_HEIGHT, marginBottom: 10, marginLeft: -40}} source={require('./app/resources/LogoCabeceraUtilidades.png')}/>
    const NavigationBarBackgroundColor = this.state.selectedItem==pages.INICIO?'#bd9500':'#ebdfb2';
    
    const styleIconMenu = (this.state.selectedItem==pages.INICIO ? {color: 'white'} : {color: '#bd9500'});
    
    iconMenu=<Icon name='ios-menu' style={[styleIconMenu, styles.iconMenuLateral]} onPress={(isOpen) => this.updateMenuState(true)}/>
    iconPower=<Icon name='ios-power' style={[styles.iconPowerOff, styleIconMenu]} onPress={() => this.exitApp()}/>
 
    return (
      <Provider store={store}>

        <SideMenu
          menu={this.menu}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}>

          <NavigationBar
            style={{ backgroundColor:NavigationBarBackgroundColor, height:80}}
            title={<View style={{ }}>{logoHeader}</View>}
            leftButton={iconMenu}
            rightButton={iconPower}/>

          <NavigateTo scene={this.state.selectedItem} onItemSelected={this.onMenuItemSelected} />

        </SideMenu>

      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 0,
  },
  avatar: {
    width: 24,
    height: 24,
    marginTop: 10,
    flex: 1,
  },
  itemMenuTop: {
    width: 40,

    flex: 1,
    marginLeft:4,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  iconMenu: {
    width: 12,
    height: 12,
    borderRadius: 24,
    position: 'absolute',
    left: 5,
    top: 5,
  },
  iconMenuLateral:{
     padding: 10,
  },
  iconPowerOff:{
    paddingTop: 10,
    paddingBottom: 0,
    paddingRight: 10
  }
});