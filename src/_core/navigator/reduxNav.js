import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import routes from "./routes";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const RootNavigator = createStackNavigator(routes, {
  initialRouteName: "Splash",
  headerMode: "none"
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
