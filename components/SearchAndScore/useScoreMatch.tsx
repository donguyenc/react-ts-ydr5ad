import * as React from 'react';
import { AppContext } from '../../context';
import { calculateMatchScore } from './utils';

const useScoreMatch = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState([]);
  const { state } = React.useContext(AppContext);

  function getResults() {
    const res = calculateMatchScore(state.people, state.artist_by_genre, value);
    setResults(res);
  }

  return {
    value,
    setValue,
    results,
    getResults,
    state,
  };
};

export default useScoreMatch;
