import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Settings({ navigation }) {
  return (
    <View style={styles.logincontainer}>
      <Text style={styles.logo}>APP LOGO</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
           />
        </View>
        <TouchableOpacity >
          <Text style={styles.forgot} >Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      
    </View>
  );
}