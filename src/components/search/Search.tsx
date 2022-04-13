import React from "react";
import { Container, Input } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function Search() {
  return (
    <Container>
      <Input
        placeholder="What's your pokemon name?"
      >
        <Icon
          name="search"
          size={24}
        />
      </Input>
    </Container>
  );
}