import React from "react";
import { Container, Image } from "./styles";
import { StatusBar } from 'react-native';
import Constants from "expo-constants";

export default function Header() {

  return (
    <Container
      paddingTop={Constants.statusBarHeight}
    >
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Image
        source={require('../../assets/pokeball_yellow.png')}
      />
    </Container>
  );
}