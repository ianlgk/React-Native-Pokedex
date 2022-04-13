import React from "react";
import { Container, Input, IconStyled } from "./styles";

export default function Search() {
  return (
    <Container>
      <Input
        placeholder="What pokemon do you want to find?"
        placeholderTextColor="#3f3f3f"
      />
      <IconStyled
        name="search"
        size={24}
        color="#3f3f3f"
      />
    </Container>
  );
}