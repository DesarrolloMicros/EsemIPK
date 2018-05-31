import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native'

const DEFAULT_HEIGHT = 240;
const DEFAULT_COLUMN_WIDTH = 40;

class Table extends Component {
/*
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      width: PropTypes.number
    })).isRequired,
    columnWidth: PropTypes.number,
    height: PropTypes.number,
    dataSource: React.PropTypes.array.isRequired,
    renderCell: React.PropTypes.func,
  };
*/
  static defaultProps = {
    columns: [],
    dataSource: [],
    columnWidth: DEFAULT_COLUMN_WIDTH,
    height: DEFAULT_HEIGHT,
    renderCell: undefined
  };

  _renderCell(cellData, col) {
    let style = {width: col.width || this.props.columnWidth || DEFAULT_COLUMN_WIDTH};
    return (
      <View key={col.dataIndex} style={[styles.cell, style]}>
        <Text style={styles.celda}>{(col.render ? col.render(cellData) : cellData)}</Text>
      </View>
    )
  }

  _renderHeader() {
    let { columns, columnWidth } = this.props;
    return columns.map((col, index) => {
      let style = {width: col.width || columnWidth || DEFAULT_COLUMN_WIDTH};
      return (
        <View key={index} style={[styles.headerItem, style]}>
          <Text style={{fontSize:12, fontFamily: "Merriweather-Bold"}}>{col.title}</Text>
        </View>
      )
    })
  }

  _renderRow(rowData, index) {
    let { columns, renderCell } = this.props;
    if(!renderCell) {
      renderCell = this._renderCell.bind(this, );
    }
    return (
      <View key={index} style={styles.row}>
        {
          columns.map(col => renderCell(rowData[col.dataIndex], col))
        }
      </View>
    );
  }

  render() {
    let { dataSource, height } = this.props;
    return (
      <ScrollView
        style={styles.container}
        horizontal={true}
        bounces={false} 
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignSelf: 'center', alignContent: 'center', backgroundColor:'blue'}}>
          <View style={styles.header}>
            { this._renderHeader() }
          </View>
          <ScrollView
            style={styles.dataView}
            contentContainerStyle={styles.dataViewContent} >
            { dataSource.map((rowData, index) => this._renderRow(rowData, index)) }
          </ScrollView>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center'
  },
  contentContainer: {
    height: 240
  },
  header: {
    flexDirection: 'row',
  },
  headerItem: {
    minHeight: 30,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: '#efefef',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataView: {
    flexGrow: 1,
  },
  dataViewContent: {
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fbfbfb',
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
  cell: {
    minHeight: 25,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: 'transparent',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  celda:{
    fontSize:12,
    fontFamily: "RobotoCondensed-Bold"
  }
});

export default Table