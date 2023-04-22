import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #0077ff;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  border-bottom: 2px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TableData = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
