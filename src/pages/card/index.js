import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, ScrollView,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../../utils/animate-config';

import cards from './card';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
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
    height: 230,
    padding: '3%',
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  order_date:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  order_label:{
    width: '75%',
    fontSize: 18,
    color: '#000000',
  },
  order_icon:{
    width: 22,
    height: 22,
    marginRight: '3%',
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
  },
  card_price:{
    marginTop: 15,
    textAlign: 'right',
    color: '#e22809',
    fontSize: 18,
    fontWeight: '800',
  },
});

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card_list: []
    }
  }
  componentDidMount(){
    this.getOrder()
  }
  componentWillUnmount(){
    // 
  }

  getOrder(){
    this.setState({
      card_list: cards.data
    })
  }

  render() {
    let self = this
    // StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor('#e1e1e1')
    return (
      <Animatable.View animation={config.name} easing={config.easing} duration={config.long}
       style={styles.container}>
        {/* <Text style={styles.title}
        onPress={()=>{
            self.props.back && self.props.back()
        }}>Order</Text> */}
        <ScrollView style={styles.scr}>
        {this.state.card_list.map((item,index) => {
          return (
            <View style={styles.order_item} key={index}>
              <View style={styles.order_date}>
                <Image style={styles.order_icon} source={item.icon} />
                <Text style={styles.order_label}
                onPress={()=>{
                  self.props.back && self.props.back()
                }}
                >{item.store}</Text>
              </View>
              <View style={styles.order_d}>
                <Image style={styles.order_img} source={item.img} />
                <Text style={styles.order_t}
                 onPress={()=>{
                  self.props.back && self.props.back()
                }}
                >{item.desc}</Text>
              </View>
              <Text style={styles.card_price}
               onPress={()=>{
                self.props.back && self.props.back()
              }}
              >{item.price+'（元）'}</Text>
            </View>
          )
        })}
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Card;
