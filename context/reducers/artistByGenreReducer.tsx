const artistByGenreReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ARTIST':
      let updatingArtistByGenre = state;
      updatingArtistByGenre[action.payload.genre].push(action.payload.artist);
      return {
        ...updatingArtistByGenre,
      };
    default:
      return state;
  }
};

export default artistByGenreReducer;
