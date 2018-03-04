import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from  '@expo/vector-icons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.nav}>
           <Ionicons name="md-arrow-round-back" size={45} color="black" />
           <Feather name="heart" size={45} color="black" />
           <Feather name="share" size={45} color="black" />
           <Feather name="more-horizontal" size={45} color="black" />     
          </View>
          <View style={styles.saveButton}>
            <FontAwesome name="save" size={45} color="black" />
            <Text style={styles.saveText}>Save</Text>
          </View>
        </View>

        <View style={styles.pic}>
          <Text>Photograph or Videos</Text>
        </View>

        <View style={styles.middleBar}>
          <View style={styles.content}>
            <Text>Hello World!</Text>
            <Text>World needs you!</Text>
          </View>
          <View style={styles.visitButton}>
            <Text style={styles.saveText1}>Visit</Text>
          </View>
        </View>

        <View style={styles.lastBar}>
          <View style={styles.roundPic}>
          </View>
          <View style={styles.textInfo}>
           <Text><Text style={styles.textBold}>Vaibhao </Text>likes <Text style={styles.textBold}>React Native</Text></Text>
           <Text style={{marginTop: 10}}>Actively seeking full-time opportunities in Web and mobile development! Knowledge of Software Development Life Cycle, Software Testing Life Cycle, Agile and Scrum Methodologies!</Text>
          </View>
        </View>
           
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 0.6,
    backgroundColor:'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  nav: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 30
  },
  saveButton: {
    flex: 1.5,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderStyle: 'solid',
    backgroundColor: 'lightgray',
    borderRadius: 10
  },
  saveText: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 3
  },
  pic: {
    flex: 1,
    backgroundColor: 'powderblue',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleBar: {
    flex: 0.5,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'space-between',
    borderRadius: 10
  },
  content: {
    flex: 2, 
    padding: 30
  },
  visitButton: {
    flex: 1,
    borderWidth: 3,
    borderStyle: 'solid',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  saveText1: {
    fontSize: 20
  },
  lastBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'powderblue',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  roundPic: {
    flex: 0.6,
    margin: 30,
    borderStyle: 'solid',
    borderWidth: 3,
    width: 70,
    height: 75,
    borderColor: 'black',
    backgroundColor: 'lightgray',
    borderRadius: 50
  },
  textInfo: {
    flex: 2,
    marginTop: 10
  },
  textBold: {
    fontWeight: 'bold'
  }
});
