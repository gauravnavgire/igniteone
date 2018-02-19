import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import {Colors } from "../../Themes/";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text: {
    backgroundColor: "whitesmoke",
    color: "#4A90E2",
    fontSize: 24,
    padding: 10
  }
});

export default class Title extends Component {
  render() {
    return (
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "To-Do List", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
        backgroundColor = {Colors.violet}
      />
    );
  }
}
