import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../../utils/animate-config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 25,
    color: '#004afe',
    fontWeight: 'bold',
  },
  ad: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  ad_img: {
    width: '100%',
    height: 150,
    // margin: '3%',
  },
  part: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    // margin: '3%',
    marginBottom: 15,
  },
  part_i: {
    width: '30%',
    backgroundColor: '#409eff',
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 80,
    textAlign: 'center',
    borderRadius: 5,
  },
  news: {
    width: '100%',
  },
  news_i: {
    width: 'auto',
    fontSize: 18,
    margin: 15,
    marginBottom: 0,
    marginTop: 0,
  },
  news_img: {
    width: 'auto',
    height: 220,
    margin: 15,
  },
  scr: {
    width: '100%',
    height: '100%',
    marginBottom: 40,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // StatusBar.setBarStyle('light-content');
    // StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('#ff879c');
  }
  render() {
    let self = this;
    return (
      <Animatable.View
        animation={config.name}
        easing={config.easing}
        duration={config.long}
        style={styles.container}>
        <ScrollView style={styles.scr}>
          {/* <Text style={styles.title}
        onPress={()=>{
            self.props.back && self.props.back()
        }}>Home</Text> */}
          <View style={styles.ad}>
            <Image
              style={styles.ad_img}
              source={require('../../assets/img/ad.png')}
            />
          </View>
          <View style={styles.part}>
            {['学习', '广告业务', '课程表'].map((item, index) => {
              let obj = {};
              Object.keys(styles.part_i).forEach(function (key) {
                obj[key] = styles.part_i[key];
              });
              if (index > 1) {
                obj.backgroundColor = 'purple';
              }
              if (index > 0 && index < 2) {
                obj.backgroundColor = 'orange';
              }
              return (
                <Text style={obj} key={index}>
                  {item}
                </Text>
              );
            })}
          </View>
          {[
            {
              t: '春蚕到死丝方尽，蜡炬成灰泪始干，落寞的诗人，平凡的人生',
              m: require('../../assets/img/n1.png'),
            },
            {
              t: '走进九月，让我们挥手昨日的哀伤与忧愁，作别往日的烦恼与纠结；让我们整装待发，重新启航。因为过去无法重来，明天还是未知',
              m: require('../../assets/img/n2.png'),
            },
            {
              t: '红尘中，还有一份如水清澈的缘分。不甜腻，却真诚；不浓烈，却久长。他（她）总在身后不起眼的角落里默默地守候着我们',
              m: require('../../assets/img/n3.png'),
            },
          ].map((item, index) => {
            return (
              <View style={styles.news} key={index}>
                <Text style={styles.news_i}>{item.t}</Text>
                <Image style={styles.news_img} source={item.m} />
              </View>
            );
          })}
        </ScrollView>
      </Animatable.View>
    );
  }
}

export default Home;
