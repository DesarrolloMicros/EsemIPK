import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';


//import Table from 'react-native-simple-table';
import Table from './Table';

import columnDefs from './columnDefs';

export default class tabla extends Component {
    
    render (){
        //console.log('Table props', this.props);
        return (
          <ScrollView>
            {this.props.dataSource &&
              <Table columns={columnDefs} dataSource={this.props.dataSource} />
            }
          </ScrollView>
        );
    };
}