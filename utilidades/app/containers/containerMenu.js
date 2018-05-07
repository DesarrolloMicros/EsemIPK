import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View, ScrollView, AppRegistry} from 'react-native'
import {
  List,
  ListItem,
  SideMenu
} from 'react-native-elements'

import actionCreators from '../actions';

class containerMenu extends Component {

    constructor () {
        super()
        this.state = {
        toggled: false
        }
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    toggleSideMenu () {
        this.setState({
        toggled: !this.state.toggled
        })
    }
    
    render(){
        const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amanda Martin',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            subtitle: 'CEO'
        },
        {
            name: 'Christy Thomas',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
            subtitle: 'Lead Developer'
        },
        {
            name: 'Melissa Jones',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
            subtitle: 'CTO'
        }
        ]

        const MenuComponent = (
            <ScrollView style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
                <List containerStyle={{marginBottom: 20}}>
                {
                list.map((l, i) => (
                    <ListItem
                    onPress={() => console.log('something')}
                    avatar={l.avatar_url}
                    key={i}
                    title={l.name}
                    subtitle={l.subtitle}
                    />
                ))
                }
                </List>
            </ScrollView>
        );

        return (
        <SideMenu
            toggled={this.state.toggled}
            MenuComponent={MenuComponent}>
        </SideMenu>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
      return  bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(containerMenu)