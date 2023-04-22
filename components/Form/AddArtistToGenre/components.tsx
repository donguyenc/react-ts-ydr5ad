import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 12px;

  &:focus {
    outline: none;
    border: 1px solid #0077ff;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const Option = styled.option`
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #0077ff;
  color: #fff;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-top: 12px;

  ${({ disabled }) =>
    disabled &&
    `
      background-color: gray !important;
      cursor: not-allowed;
    `}

  &:hover {
    background-color: #005ae6;
  }

  &:active {
    background-color: #0047b3;
  }
`;
