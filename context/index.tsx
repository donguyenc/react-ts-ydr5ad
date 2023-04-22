import * as React from 'react';
import { PeopleData, ArtistData } from '../data';
import { artistByGenreReducer, peopleReducer } from './reducers';

interface Props {
  children: React.ReactNode;
}

interface ArtistByGenre {
  [key: string]: string[];
}

interface People {
  name: string;
  music_genre: string[];
  movies: string[];
  location: string;
}

type InitialStateType = {
  people: People[];
  artist_by_genre: ArtistByGenre;
};

// ideally empty then we update via api call
const initialState = {
  people: PeopleData,
  artist_by_genre: ArtistData,
};

const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = ({ people, artist_by_genre }, action) => ({
  people: peopleReducer(people, action),
  artist_by_genre: artistByGenreReducer(artist_by_genre, action),
});

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // example if we decide to update the store via api
  React.useEffect(() => {
    setTimeout(() => {
      const peopleData = PeopleData;
      // dispatch() to update state
    }, 3000);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
