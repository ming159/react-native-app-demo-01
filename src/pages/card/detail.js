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
    backgroundColor: '#f1f1f1',
  },
  scr: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 25,
    color: '#004afe',
    fontWeight: 'bold',
  },
  detail_head: {
    width: '100%',
    backgroundColor: 'black',
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
  detail_list:{
    width: '100%',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail_list_t: {
    backgroundColor: '#409eff',
    color: '#ffffff',
    fontWeight:'bold',
    fontSize: 26,
    textAlign: 'center',
    width: '94%',
    height: 100,
    lineHeight: 100,
    borderRadius: 10,
    margin:'3%',
  },
  detail_list_img: {
    margin: 20,
    width: '94%',
    height: 200,
    margin:'3%',
  },
});

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this
    // StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor('black')
    return (
      <Animatable.View animation={config.name2} easing={config.easing} duration={config.long}
       style={styles.container}>
        {/* <Text style={styles.title}
        onPress={()=>{
            self.props.back && self.props.back()
        }}>Detail</Text> */}
        <View style={styles.detail_head}>
          <TouchableOpacity activeOpacity={1} onPress={()=>{
            self.props.back && self.props.back()
          }}>
            <Image style={styles.detail_back} source={require('../../assets/img/left_arrow.png')} />
          </TouchableOpacity>
          <Text style={styles.detail_title}>详情</Text>
        </View>
        
        <ScrollView style={styles.scr}>
        {[1,2,3,4,5,6].map((item,index) => {
          return (
            <View style={styles.detail_list} key={index}>
              <Text style={styles.detail_list_t}>至臻品质</Text>
              <Image style={styles.detail_list_img} source={require('../../assets/img/ad.png')} />
            </View>
          )
        })}
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Detail;
