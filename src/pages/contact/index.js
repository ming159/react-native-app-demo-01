import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../../utils/animate-config';

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
});

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this
    return (
      <Animatable.View animation={config.name2} easing={config.easing} duration={config.long}
       style={styles.container}>
        <Text style={styles.title}
        onPress={()=>{
            self.props.back && self.props.back()
        }}>Contact</Text>
      </Animatable.View>
    );
  }
}

export default Contact;
