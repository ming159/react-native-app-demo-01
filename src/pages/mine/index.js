import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../../utils/animate-config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  scr: {
    width: '100%',
    height: '100%',
    marginBottom: 60,
  },
  title: {
    fontSize: 25,
    color: '#004afe',
    fontWeight: 'bold',
  },
  my_avator: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fcb216',
    justifyContent: 'flex-start',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },
  my_avator_img:{
    width: 110,
    height: 110,
    borderRadius: 55,
    marginRight: 15,
  },
  my_avator_r:{
    width: '65%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  my_avator_nick:{
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  my_avator_intro:{
    color: '#333333'
  },
  my_oper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 15,
  },
  my_oper_label:{
    flexDirection: 'row',
    marginLeft: 15,
  },
  my_oper_img:{
    width: 22,
    height: 22,
    marginRight: 15,
  },
  my_oper_t:{
    fontSize: 16,
  },
  my_oper_r:{
    width: 22,
    height: 22,
    marginRight: 15,
  },
});

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidMount(){
    this.getOption()
  }

  getOption(){
    let data = [
      {
        icon: require('../../assets/img/mony.png'),
        name: '钱包'
      },{
        icon: require('../../assets/img/collect.png'),
        name: '我的收藏'
      },{
        icon: require('../../assets/img/share.png'),
        name: '历史分享'
      },{
        icon: require('../../assets/img/me.png'),
        name: '修改信息'
      },{
        icon: require('../../assets/img/location.png'),
        name: '地理位置'
      },{
        icon: require('../../assets/img/setting.png'),
        name: '设置'
      },
    ]
    this.setState({
      options: data
    })
  }

  render() {
    let self = this
    // StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor('#fcb216')
    return (
      <Animatable.View animation={config.name} easing={config.easing} duration={config.long}
       style={styles.container}>
        {/* <Text style={styles.title}
        onPress={()=>{
            self.props.back && self.props.back()
        }}>Mine</Text> */}
        <ScrollView style={styles.scr}>
        <View style={styles.my_avator}>
          <Image style={styles.my_avator_img} source={require('../../assets/img/n1.png')} />
          <View style={styles.my_avator_r}>
            <Text style={styles.my_avator_nick}>她是个笨蛋儿嗄</Text>
            <Text style={styles.my_avator_intro}>
              <Text>座右铭：</Text>
              世界上最美的距离，就是...刚好是与你长擦肩，而你却停下来，哈哈
            </Text>
          </View>
        </View>
        
        {this.state.options.map((item,index) => {
          return (
            <TouchableOpacity key={index} activeOpacity={0.7}
              onPress={()=>{
                self.props.back && self.props.back()
            }}>
            <View style={styles.my_oper}>
              <View style={styles.my_oper_label}>
                <Image style={styles.my_oper_img} source={item.icon} />
                <Text style={styles.my_oper_t}>{item.name}</Text>
              </View>
              <Image style={styles.my_oper_r} source={require('../../assets/img/right_arrow.png')} />
            </View>
            </TouchableOpacity>
          )
        })}
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Mine;
