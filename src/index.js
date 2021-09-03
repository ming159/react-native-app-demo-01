import React, {Component} from 'react';
import {View, Text, StyleSheet,StatusBar,AsyncStorage,Alert} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import routeConfig from './router/index';
import Tabs from './pages/tabs';
import Adver from './pages/adver';

const routes = routeConfig.routes;
let timer = null;

const styles = StyleSheet.create({
  container: {
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

class Index extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      showAd: true,
      count: 10,
      show: false,
      currentPage: routeConfig.defaultPath,
    };
  }

  componentDidMount() {
    let self = this
    setTimeout(function(){
      SplashScreen.hide();
      self.changeTimer();
    }, 3000)
  }

  reset(data) {
    this.setState({show: data});
  }
  tabUpdate(path) {
    this.setState({currentPage: path});
  }
  mainRender() {
    let self = this;
  }


  //  广告
  setHide(time){
    this.setShowAd()
    time && clearInterval(time)
  }
  setShowAd(){
    this.setState({
      showAd: false
    })
    // AsyncStorage.setItem('isShow',JSON.stringify('true'))
  }
  changeTimer(){
    let self = this;
    timer = setInterval(() => {
      if(self.state.count<1){
        self.setShowAd();
        clearInterval(timer)
      } else {
        self.state.count--;
        self.setState({
          count: self.state.count
        })
      }
    }, 1000);
  }
  getStorage(){
    let result = true;
    AsyncStorage.getItem('isShow',(err,res)=>{
      if(!err){
        console.log( JSON.parse(res))
        // result = false
      }
    })
    return result;
  }
  removeStorage(){
    // AsyncStorage.removeItem('isShow',(err)=>{})
  }
  
  indexPage(){
    let self = this;
    let compage = null;
    routes.map((item, key) => {
      if (item.children && self.state.currentPage == item.children.path) {
        compage = item;
      }
    });
    if (compage) {
      const Page = compage.children.component;
      return (
        <Page
          back={() => {
            self.reset(false);
            self.tabUpdate(compage.path);
          }}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {routes.map((item, key) => {
            if (self.state.currentPage == item.path) {
              const Page = item.component;
              return (
                <Page
                  key={key}
                  back={() => {
                    self.reset(false);
                    self.tabUpdate(item.children ? item.children.path : 'home');
                  }}
                />
              );
            }
          })}
          <Tabs
            path={this.state.currentPage}
            events={path => {
              self.tabUpdate(path);
            }}
          />
        </View>
      );
    }
  }

  adPage(){
    let self = this
    StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('#F5FCFF');
    return (
      <Adver count={this.state.count} back={ ()=>{ self.setHide(timer) }} />
    )
  }
  
  render() { 
    // && !this.getStorage()
    if(this.state.showAd){
      return this.adPage()
    } else {
      return this.indexPage()
    }
  }
}

export default Index;
