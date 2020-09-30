import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default ({ navigation }) => {

    const { colors } = useTheme()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{...styles.container, backgroundColor: colors.background}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{...styles.inner, color: colors.text}}>
          <Text style={{...styles.header, color: colors.text}}>Header</Text>
          <TextInput 
            autoFocus
            defaultValue="Username"
            placeholderTextColor={{color: colors.text}}
            style={{...styles.textInput, color:colors.text}} 
        />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});