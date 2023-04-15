import React,{Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class CreateScreen extends Component{
  constructor(props){
    super(props)
    this.state=({
      
    })
  }

  async addMedicine(){
    if(this.state.fullName && this.state.prescription && this.state.medicalHistory)
    {
      let medicineData = {
        fullName: this.state.fullName,
        prescription: this.state.prescription,
        medicalHistory: this.state.medicalHistory,
      }
      await firebase
       .database()
       .ref("/posts/" + (Math.random().toString(36).slice(2)))
       .set(medicineData)
       .then(function(snapshot){})
       
       this.props.setUpdateToTrue()
    }
    else{
      Alert.alert("All fields are required!"
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
            style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
      onChangeText={(fullName) => this.setState({fullName})}
      placeholder={"Full Name"}
      multiline= {true}
      numberOfLines= {5}
      placeholderTextColor= "green"
      />

   <TextInput
     style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
      onChangeText={(prescription) => this.setState({prescription})}
      placeholder={"Prescription"}
      multiline= {true}
      numberOfLines= {5}
      placeholderTextColor= "purple"
      />
         <TextInput
           style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
      onChangeText={(medicalHistory) => this.setState({medicalHistory})}
      placeholder={"Medical History"}
      multiline= {true}
      numberOfLines= {5}
      placeholderTextColor= "teal"
      />

       <TouchableOpacity style={styles.submitButton}>    
        <Text> Submit </Text>

      </TouchableOpacity>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
 
  textContainer:{
    flex:0.5,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    marginTop:50,
    marginBottom:50
  },
  inputFont:{
   text: "bold"
  },
  inputFontExtra:{
   textAlign:"center",
   flex:0.5,
   marginTop:RFValue(20)
  },
  inputTextBig:{
    textSize:10
  }

})