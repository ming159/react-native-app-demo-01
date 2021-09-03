import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, ScrollView, StatusBar,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../../utils/animate-config';

import { orders } from '../order/order';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    his_list: {
        width: '94%',
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 0.5,
        paddingBottom: 20,
        paddingTop: 20,
        marginRight: '3%',
        marginLeft: '3%',
    },
    his_img: {
        width: '30%',
        height: 120,
        borderRadius: 5,
        marginRight: '3%',
    },
    his_info: {
        width: '67%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    his_info_desc: {
        color: '#333333',
        width: '100%',
    },
    his_info_time: {
        width: '100%',
        color: '#999999',
        marginTop: 20,
        // textAlign: 'right',
    }
});

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
        historys: []
    }
  }

  componentDidMount(){
      this.getHistory()
  }

  getHistory(){
      let obj = orders();
      this.setState({
          historys: obj.data
      })
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
        }}>History</Text> */}
        <View style={styles.detail_head}>
          <TouchableOpacity opacity={1} onPress={()=>{
            self.props.back && self.props.back()
          }}>
            <Image style={styles.detail_back} source={require('../../assets/img/left_arrow.png')} />
          </TouchableOpacity>
          <Text style={styles.detail_title}>历史收藏</Text>
        </View>
        
        <ScrollView style={styles.scr}>
            {this.state.historys.map((item, index) => {
                return (
                    <View style={styles.his_list} key={index}>
                        <Image style={styles.his_img} source={item.img} />
                        <View style={styles.his_info}>
                            <Text style={styles.his_info_desc}>{item.desc}</Text>
                            <Text style={styles.his_info_time}>{item.time}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default History;
