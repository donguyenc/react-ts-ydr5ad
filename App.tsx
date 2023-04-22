import * as React from 'react';
import ScoreMatch from './components/SearchAndScore';
import AddArtistToGenre from './components/Form/AddArtistToGenre';
import { AppProvider } from './context';
import './style.css';

export default function App() {
  return (
    <div>
      <AppProvider>
        <ScoreMatch />
        <AddArtistToGenre />
      </AppProvider>
    </div>
  );
}
