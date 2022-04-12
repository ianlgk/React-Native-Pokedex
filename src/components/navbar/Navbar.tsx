import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <StatusBar style="light" />
    </Container>
  );
}