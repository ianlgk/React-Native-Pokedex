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
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-top: ${(props) => props.paddingTop}px;
  padding-bottom: 15px;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;