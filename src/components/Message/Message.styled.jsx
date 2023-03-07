import styled from '@emotion/styled';

export const MessageText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 16px;
  width: 350px;
  height: 50px;
  background-color: white;
  border-radius: 2%;
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
  text-align: center;
`;
