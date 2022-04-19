import React from "react";
import { Container, Input, IconStyled } from "./styles";

export default function Search() {
  return (
    <Container>
      <Input
        placeholder="What pokemon do you want to find?"
        placeholderTextColor="#8d8d8d"
      />
      <IconStyled
        name="search"
        size={24}
        color="#b3b3b3"
      />
    </Container>
  );
}