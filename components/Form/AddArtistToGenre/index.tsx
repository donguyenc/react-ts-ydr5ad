import * as React from 'react';
import { Form, Label, Select, Option, Button, Input } from './components';
import { AppContext } from '../../../context';

const AddArtistToGenreForm = () => {
  const [artist, setArtist] = React.useState('');
  const [genre, setGenre] = React.useState('');
  const { state, dispatch } = React.useContext(AppContext);

  const genres = Object.keys(state.artist_by_genre);

  const disabledSubmit = genre === '' || artist.length == 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!disabledSubmit) {
      dispatch({ type: 'ADD_ARTIST', payload: { artist, genre } });
    }
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <h1>Add artist to genre form</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="artist">Artist Name:</Label>
        <Input
          type="text"
          id="artist"
          value={artist}
          onChange={handleArtistChange}
        />

        <Label htmlFor="genre">Genre:</Label>
        <Select id="genre" value={genre} onChange={handleGenreChange}>
          <Option value="">Select a genre</Option>
          {genres.map((genre) => (
            <Option key={genre} value={genre}>
              {genre}
            </Option>
          ))}
        </Select>

        <Button disabled={disabledSubmit} type="submit">
          Add Artist
        </Button>
      </Form>
    </div>
  );
};

export default AddArtistToGenreForm;
