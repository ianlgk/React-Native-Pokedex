import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  background: #F5F5F5;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 10px 0px 10px 40px;
`;

export const IconStyled = styled(Icon)`
  position: absolute;
  left: 10px;
`;