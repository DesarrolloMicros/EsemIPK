// @flow
'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
  LayoutAnimation,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import AnimShape from '../art/AnimShape';
import Theme from '../theme';

const d3 = {
  scale,
  shape,
};

import {
    scaleBand,
    scaleLinear
} from 'd3-scale';

// type Props = {
//   height: number,
//   width: number,
//   pieWidth: number,
//   pieHeight: number,
//   colors: any,
//   onItemSelected: any
// };

// type State = {
//   highlightedIndex: number,
// };

class Pie extends React.Component {

  // state: State;

  constructor(props) {
    super(props);
    this.state = { highlightedIndex: 0 };
    this._createPieChart = this._createPieChart.bind(this);
    this._value = this._value.bind(this);
    this._label = this._label.bind(this);
    this._color = this._color.bind(this);
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  // methods used to tranform data into piechart:
  // TODO: Expose them as part of the interface
  _value(item) { return item.number; }

  _label(item) { return item.name; }

  _color(index) { return Theme.colors[index]; }

  _createPieChart(index) {

    var arcs = d3.shape.pie()
        .value(this._value)
        (this.props.data);

    var hightlightedArc = d3.shape.arc()
      .outerRadius(this.props.pieWidth/2 + 10)
      .padAngle(.05)
      .innerRadius(30);

    var arc = d3.shape.arc()
      .outerRadius(this.props.pieWidth/2)
      .padAngle(.05)
      .innerRadius(30);

    var arcData = arcs[index];
    var path = (this.state.highlightedIndex == index) ? hightlightedArc(arcData) : arc(arcData);

     return {
       path,
       color: this._color(index),
     };
  }

  _onPieItemSelected(index) {
    this.setState({...this.state, highlightedIndex: index});
    this.props.onItemSelected(index);
  }
  
  _createBarChart (x, y, w, h) {
    return this._drawRoundedRect(x, y, w, h, 10)
  }
  _drawRoundedRect(
    xCoord,
    yCoord,
    width,
    height,
    radius,
    needRoundingTopLeft = true,
    needRoundingTopRight = true,
    needRoundingBottomLeft = true,
    needRoundingBottomRight = true
  ) {
    let retval;
    retval = 'M' + (xCoord + radius) + ',' + yCoord;
    retval += 'h' + (width - 2 * radius);
  
    if (needRoundingTopRight) {
      retval += 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius;
    } else { retval += 'h' + radius; retval += 'v' + radius; }
  
    retval += 'v' + (height - 2 * radius);
  
    if (needRoundingBottomRight) {
      retval += 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius;
    } else { retval += 'v' + radius; retval += 'h' + -radius; }
  
    retval += 'h' + (2 * radius - width);
  
    if (needRoundingBottomLeft) {
      retval += 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius;
    } else { retval += 'h' + -radius; retval += 'v' + -radius; }
  
    retval += 'v' + (2 * radius - height);
  
    if (needRoundingTopLeft) {
      retval += 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;
    } else { retval += 'v' + -radius; retval += 'h' + radius; }
  
    retval += 'z';
  
    return retval;
  }
  render() {
    const margin = styles.container.margin;
    const x = this.props.pieWidth / 2 + margin;
    const y = this.props.pieHeight / 2 + margin;

    return (
      <View>
      <Surface width={500} height={500}>
        <Group x={100} y={0}>
          <Shape
            d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            stroke="#000"
            strokeWidth={1} />
        </Group>
      </Surface>
    </View>
    );

    // return (
    //   <View width={this.props.width} height={this.props.height}>
    //   <Surface width={this.props.width} height={this.props.height}>
      
    //   <Shape
    //             d={this._createBarChart(7, -35, 70, 35)}
    //             key={'pie_shape_' + 3}
    //             stroke={this._color(1)}
    //             fill={this._color(1)}
    //             /> 
    //     </Surface>
    //     {/* <Surface width={this.props.width} height={this.props.height}>
    //        <Group x={x} y={y}>
    //        {
    //           this.props.data.map( (item, index) =>
    //           ((Platform.OS === 'android' ?
    //           <Shape
    //             d={this._createPieChart(index).path}
    //             key={'pie_shape_' + index}
    //             stroke={this._color(index)}
    //             fill={this._color(index)}
    //             />
    //           :<AnimShape
    //              key={'pie_shape_' + index}
    //              color={this._color(index)}
    //              d={ () => this._createPieChart(index)}
    //           />))
    //           )
    //         }
    //        </Group>
    //     </Surface> */}
    //     <View style={{position: 'absolute', top:margin, left: 2*margin + this.props.pieWidth}}>
    //       {
    //         this.props.data.map( (item, index) =>
    //         {
    //           var fontWeight = this.state.highlightedIndex == index ? 'bold' : 'normal';
    //           return (
    //             <TouchableWithoutFeedback key={index} onPress={() => this._onPieItemSelected(index)}>
    //               <View style={{flexDirection:'column'}}>
    //                 <Text style={[styles.label, {color: '#5e4f2b'}]}>{this._label(item)}</Text>
    //                 <Text style={[styles.label, {color: this._color(index), fontWeight: fontWeight, marginTop: -3}]}>{this._value(item)}%</Text>
    //               </View>
    //             </TouchableWithoutFeedback>
    //           );
    //         })
    //       }
    //     </View>
    //   </View>
    // );
  }
}

const styles = {
  container: {
    margin: 20,
  },
  label: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'normal',
  }
};

export default Pie;
