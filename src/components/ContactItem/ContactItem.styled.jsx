import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  background-color: white;
  border-radius: 2%;
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
`;

export const StyledButton = styled.button`
  width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: red;
  border-radius: 10%;

  font-size: 14px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
