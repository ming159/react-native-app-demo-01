import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';

import bottomTabs from '../../utils/bottom-tab';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        zIndex: 22,
    },
    item: {
        width: 100 / bottomTabs.length + '%',
        height: 50,
        lineHeight: 50,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemv:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 14,
        color: '#333333',
    },
    title_s: {
        fontSize: 14,
        color: '#409eff',
    },
    img: {
        width: 20,
        height: 20,
    }
});

class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let self = this
        return (
        <View style={{position: 'absolute', bottom: 0}} >
            <View style={styles.container}>
                {bottomTabs.map((item, key) => {
                    return (
                    <TouchableHighlight
                        underlayColor="#e5e5e5"
                        style={styles.item} 
                        key={key}
                        onPress={() => {
                            self.props.events && self.props.events(item.path)
                        }}>
                        <View style={styles.itemv}>
                            <Image style={styles.img} source={item.path === self.props.path
                                ?item.icons
                                :item.icon}  />
                            <Text style={item.path === self.props.path
                                ?styles.title_s
                                :styles.title}>{item.name}</Text>
                        </View> 
                    </TouchableHighlight>
                    );
                })}
            </View>
        </View>
        );
    }
}

export default Tabs;
