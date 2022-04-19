import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
    keyboardVerticalOffset: Platform.OS === 'ios' ? 30 : 100,
})`
    padding: 0 30px;
    margin-bottom: 30px;
`;
