import React,{Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

export default class InformationScreen extends Component{
  constructor(props){
    super(props)
    this.state=({
      
    })
  }

  async addInformation(){
    if(this.state.name && this.state.useOfMedicine && this.state.usedBy){

      let informationData={
      name: this.state.name,
      useOfMedicine: this.state.useOfMedicine,
      usedBy: this.state.usedBy,
      }
      await firebase
       .database()
       .ref("/posts/" + (Math.random().toString(36).slice(2)))
       .set(informationData)
       .then(function(snapshot){})
    }
    else{
      Alert.alert("All fields are required"
      [
        {text:"Ok"}
      ],
      {cancelable:false}
      );
    }
  }
  render(){
    return(
      <View style={styles.textContainer}>
      <TextInput
       style={styles.text}
       onChangeText={(name)=> this.setState({name})}
       placeholder={"Name"}
       multiline={true}
       numberOfLines={5}
       placeholderTextColor= "blue"
      />
      <TextInput
      style={styles.text}
      onChangeText={(uses)=>this.setState({uses})}
      placeholder={"Use of Medicine"}
      multiline={true}
      numberOfLines={5}
      placeHolderTextColor="red"
      />
      <TextInput
      style={styles.text}
      onChangeText={(usedBy)=> this.setState({usedBy})}
      placeholder={"Used By Date"}
      multiline={true}
      numberOfLines={5}
      placeholderTextColor="yellow"
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color:"red",
    alignItems:"center",
    fontWeight:"bold",
    fontSize:20,
    marginLeft:RFValue(20),
    marginTop:1,
    justifyContent:"center",
  },
  textContainer:{
    flex:0.5,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  button:{
    height:10,
    borderWidth:70,
    borderColor:"green",
    alignItems:"center",
    borderRadius: 30,
    justifyContent:"center"
  }
});