import React, { Component, PropTypes } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import {Colors } from "../../Themes/";

const styles = StyleSheet.create({
  bottom: {
    alignItems: "stretch",
    flexDirection	: 'column',
    justifyContent : 'flex-end'
  }
});

export default class Footer extends Component {
  render() {
    return (
      <Button
        style = {styles.bottom}
        icon={{ name: "home", size: 22 }}
        buttonStyle={{ backgroundColor: Colors.violet }}
        textStyle={{ textAlign: "center" }}
        title={`Refresh the list`}
      />
    );
  }
}
