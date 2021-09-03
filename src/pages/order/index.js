import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, ScrollView,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../../utils/animate-config';

import { orders } from './order';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5faff',
  },
  scr: {
    width: '100%',
    height: '100%',
    marginBottom: 40,
  },
  title: {
    fontSize: 25,
    color: '#004afe',
    fontWeight: 'bold',
  },
  order_item:{
    width: '100%',
    flexDirection: 'column',
    height: 200,
    padding: '3%',
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  order_date:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  order_label:{
    width: '50%',
    fontSize: 18,
    color: '#999999',
  },
  order_time:{
    width: '50%',
    fontSize: 18,
    color: '#409eff',
    textAlign: 'right',
  },
  order_d:{
    width: '100%',
    flexDirection: 'row',
    height: 100,
  },
  order_img: {
    width: '30%',
    height: 100,
    borderRadius: 7,
  },
  order_t: {
    width: '67%',
    marginLeft: '3%',
    fontSize: 18,
    color: '#333333',
  }
});

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_list: []
    }
  }
  componentDidMount(){
    this.getOrder()
  }
  componentWillUnmount(){
    // 
  }

  getOrder(){
    let obj = orders()
    this.setState({
      order_list: obj.data
    })
  }

  render() {
    let self = this
    // StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor('#037fff')
    return (
      <Animatable.View animation={config.name} easing={config.easing} duration={config.long}
       style={styles.container}>
        {/* <Text style={styles.title}
        onPress={()=>{
            self.props.back && self.props.back()
        }}>Order</Text> */}
        <ScrollView style={styles.scr}>
        {this.state.order_list.map((item,index) => {
          return (
            <View style={styles.order_item} key={index}>
              <View style={styles.order_date}>
                <Text style={styles.order_label}>订单产生时间</Text>
                <Text style={styles.order_time}
                onPress={()=>{
                  self.props.back && self.props.back()
                }}
                >{item.time}</Text>
              </View>
              <View style={styles.order_d}>
                <Image style={styles.order_img} source={item.img} />
                <Text style={styles.order_t}
                onPress={()=>{
                  self.props.back && self.props.back()
                }}
                >{item.desc}</Text>
              </View>
            </View>
          )
        })}
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Order;
