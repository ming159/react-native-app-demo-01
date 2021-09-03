import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 25,
        color: '#004afe',
        fontWeight: 'bold',
    },
    dec_num: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    count: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ad_part: {
        width: '74%',
        margin: '13%',
        padding: 20,
        marginBottom: 0,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
    },
    part_t: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

class Adver extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this
    return (
      <View style={styles.container}>
          <View style={styles.count}>
            <Text style={styles.title} onPress={ ()=>{
                self.props.back && self.props.back()
            }}>跳过广告</Text>
            <Text style={styles.dec_num}>{this.props.count}</Text>
          </View>
        <View style={styles.ad_part}>
           <Text style={styles.part_t}>这是广告页，可以在此配置广告</Text>
        </View>
      </View>
    );
  }
}

export default Adver;
