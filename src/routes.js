import React from "react";
import { AppRegistry } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import { Home } from '../src/pages/home/index';
import { AboutCar } from "./pages/aboutCar";
import { Checkout } from "./pages/checkout";
import { CreateAccount } from "./pages/createAccount";
import { Login } from "./pages/Login/index";
import { Plan } from "./pages/plan";

export const Routes = () => (
  <NativeRouter initialEntries={[{ pathname: '/checkout' }]}>
    <Switch >
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/crateaccount" component={CreateAccount} />
      <Route path="/aboutCar" component={AboutCar} />
      <Route path="/plan" exact component={Plan} />
      <Route path="/checkout" exact component={Checkout} />
    </Switch>
  </NativeRouter>
);

AppRegistry.registerComponent("MyApp", () => App);
