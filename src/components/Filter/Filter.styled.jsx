import styled from '@emotion/styled';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  font-size: 14px;
  border-radius: 2%;
  border: ${({ theme }) => {
    return theme.buttonBorder;
  }};
`;
