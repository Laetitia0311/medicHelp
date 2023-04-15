import React, { Component } from 'react';
import { Text, View ,StyleSheet,SafeAreaView,Platform,TouchableOpacity,StatusBar, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.screenButton} onPress={()=> this.props.navigation.navigate("Create")}>
           <Text style={styles.screenButtonText}> Create </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenButton}
            onPress={() => this.props.navigation.navigate("Information")}>
            <Text style={styles.screenButtonText}> Information </Text>
          </TouchableOpacity>
          <ImageBackground
          style={styles.backgroundImg}
           source={require("../hospital.png")}
          />
        </View>
      )
    }
}

const styles= StyleSheet.create({
   screenButtonText: {
    color:"yellow",
    alignItems:"center",
    fontWeight:"bold",
    fontSize:30,
    marginLeft:30,
    justifyContent:"center",
  },
  textContainer:{
    flex:0.5,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
  },
  screenButton:{
    height:5,
    borderWidth:70,
    borderColor:"purple",
    alignItems:"center",
    borderRadius: 30,
    justifyContent:"center",
    marginTop: 30,
    marginLeft: 20,

  },
  backgroundImg:{
   height:500,
   width:350,
   marginBottom:50,
   marginTop: 50,
   justifyContent:"center",
   flex: 0.5
  }
})