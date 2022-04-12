import styled from 'styled-components/native';

interface ContainerProps {
  paddingTop: number,
};

export const Container = styled.View<ContainerProps>`
  background: #c00;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-top: ${(props) => props.paddingTop}px;
  padding-bottom: 15px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;