import { render } from '@testing-library/react';
import SearchAndScore from './index';
import { calculateMatchScore } from './utils';

describe('calculateMatchScore', () => {
  const people = [
    {
      name: 'Eddy Verde',
      music_genre: ['Rock', 'Country'],
      movies: ['Avatar', 'The Good, the Bad and the Ugly'],
      location: 'Florida',
    },
    {
      name: 'Bonnie Wang',
      music_genre: ['Classical'],
      movies: ['Lilo & Stitch', 'Die Hard'],
      location: 'Maryland',
    },
    {
      name: 'Greta Heissenberger',
      music_genre: ['Jazz', 'Rock'],
      movies: ['The Departed', 'M*A*S*H', 'The Godfather'],
      location: 'Massachusetts',
    },
    {
      name: 'Justin Coker',
      music_genre: ['Country'],
      movies: ['Raiders of the Lost Ark', 'Apollo 13'],
      location: 'South Carolina',
    },
    {
      name: 'Jason Leo',
      music_genre: ['Rock', 'Ska'],
      movies: ['The Dark Knight', 'Top Gun'],
      location: 'Maine',
    },
    {
      name: 'Doug Akridge',
      music_genre: ['Rock', 'Blues'],
      movies: ['Jurassic Park', 'Cast Away', 'Romeo + Juliet'],
      location: 'Washington, D.C.',
    },
  ];

  const artist_by_genre = {
    Rock: ['Led Zeppelin', 'AC/DC', 'Rolling Stones'],
    Country: ['Alabama', 'Rascal Flatts'],
    Classical: ['Mozart', 'Bach', 'Chopin'],
    Jazz: ['Miles Davis Quintet', 'Duke Ellington', 'Louis Armstrong'],
    Ska: ['Sublime', 'Reel Big Fish', 'The Mighty Mighty Bosstones'],
    Blues: ['John Mayer Trio', 'B.B. King', 'Eric Clapton'],
  };

  test('should return an empty array when no matches are found', () => {
    const input = 'gameofthrones';
    expect(calculateMatchScore(people, artist_by_genre, input)).toEqual([]);
  });

  test('should return a score for a name match', () => {
    const input = 'Eddy';
    expect(calculateMatchScore(people, artist_by_genre, input)).toEqual([
      {
        name: 'Eddy',
        score: 4,
        matches: ['name'],
      },
    ]);
  });

  test('should return a score for a music genre match', () => {
    const input = 'rock';
    expect(calculateMatchScore(people, artist_by_genre, input)).toEqual([
      {
        name: 'Alice',
        score: 1,
        matches: ['genre'],
      },
    ]);
  });

  test('should return a score for a movie match', () => {
    const input = 'Die Hard';
    expect(calculateMatchScore(people, artist_by_genre, input)).toEqual([
      {
        name: 'Bonnie Wang',
        score: 1,
        matches: ['movies'],
      },
    ]);
  });

  test('should return a score for a location match', () => {
    const input = 'Florida';
    expect(calculateMatchScore(people, artist_by_genre, input)).toEqual([
      {
        name: 'Eddy Verde',
        score: 1,
        matches: ['location'],
      },
    ]);
  });

  test('should return a score for an artist match', () => {
    const input = 'Justin Coker';
    expect(calculateMatchScore(people, artist_by_genre, input)).toEqual([
      {
        name: 'Bob',
        score: 2,
        matches: ['artist'],
      },
    ]);
  });
});
