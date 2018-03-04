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
          <Text>Photograph</Text>
        </View>

        <View style={styles.middleBar}>
          <View style={styles.content}>
            <Text>Hello World!</Text>
            <Text>World needs you!</Text>
          </View>
          <View style={styles.visitButton}>
            <Text>Visit</Text>
          </View>
        </View>

        <View style={styles.lastBar}>
          <View style={styles.roundPic}>
            <Text>Round Pic</Text>
          </View>
          <View style={styles.textInfo}>
           <Text><Text style={styles.textBold}>Vaibhao Dhage </Text>likes <Text style={styles.textBold}>React Native</Text></Text>
           <Text>Actively seeking full-time opportunities in Web and mobile development! Knowledge of Software Development Life Cycle, Software Testing Life Cycle, Agile and Scrum Methodologies!</Text>
          </View>
        </View>
           
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 0.6,
    backgroundColor:'lightgreen',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  nav: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  saveButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 4,
    borderStyle: 'solid'
  },
  saveText: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 3
  },
  pic: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  middleBar: {
    flex: 0.5,
    backgroundColor: 'lime'
  },
  lastBar: {
    flex: 1,
    backgroundColor: 'cyan'
  }
});
