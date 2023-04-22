import * as React from 'react';
import {
  Wrapper,
  Button,
  Label,
  Input,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from './components';
import useScoreMatch from './useScoreMatch';

export default function ScoreMatch() {
  const { value, setValue, results, getResults } = useScoreMatch();

  const handleClick = () => {
    getResults();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Wrapper>
        <Label>Search form</Label>
        <Input type="text" value={value} onChange={handleChange} />
      </Wrapper>
      <Button onClick={handleClick}> Search </Button>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Score</TableHeader>
            <TableHeader>Matches</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {results.map((item, idx) => {
            return (
              <TableRow key={item.name + idx}>
                <TableData>{item.name}</TableData>
                <TableData>{item.score}</TableData>
                <TableData>{item.matches.join(', ')}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
