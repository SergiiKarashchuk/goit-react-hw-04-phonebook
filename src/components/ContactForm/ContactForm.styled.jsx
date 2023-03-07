import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 25%;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    padding: 5px;
    background-color: grey;
    width: 200px;
    font-size: 14px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledInput = styled(Field)`
  width: 250px;
  height: 30px;
  border-radius: 5%;
  border: 1px solid;
  &::placeholder {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 30px;
  transform: scale(1);
  background-color: green;
  font-size: 14px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
