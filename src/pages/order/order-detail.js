import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, ScrollView, StatusBar,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../../utils/animate-config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 25,
    color: '#004afe',
    fontWeight: 'bold',
  },
  detail_head: {
    width: '100%',
    backgroundColor: '#409eff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 0.9,
},
detail_back: {
    width: 22,
    height: 22,
    marginLeft:15,
},
detail_title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    width: '80%',
    textAlign: 'center',
},
  detail_not: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail_not_img: {
    width: 200,
    height: 200,
  },
});

class OrderDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this
    // StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor('#409eff')
    return (
      <Animatable.View animation={config.name2} easing={config.easing} duration={config.long}
       style={styles.container}>
        {/* <Text style={styles.title}
        onPress={()=>{
            self.props.back && self.props.back()
        }}>OrderDetail</Text> */}
        <View style={styles.detail_head}>
          <TouchableOpacity activeOpacity={1} onPress={()=>{
            self.props.back && self.props.back()
          }}>
            <Image style={styles.detail_back} source={require('../../assets/img/left_arrow.png')} />
          </TouchableOpacity>
          <Text style={styles.detail_title}>订单详情</Text>
        </View>
        <View style={styles.detail_not}>
           <Image style={styles.detail_not_img} source={require('../../assets/img/notfind.png')} />
        </View>
      </Animatable.View>
    );
  }
}

export default OrderDetail;
