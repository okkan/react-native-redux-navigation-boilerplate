import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import navigationService from "../services/navigationService";

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      navigationService.openScreen("Main");
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>[A GREAT LOGO]</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffdcc0",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default (Splash = connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash));
