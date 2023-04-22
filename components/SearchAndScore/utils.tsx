// sort function
function compareFn(a, b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
}

export function calculateMatchScore(
  people,
  artist_by_genre,
  input: string
): any {
  const score = [];
  const lowerCaseInput = input.toLocaleLowerCase();

  people.forEach((person) => {
    let personScore = 0;
    let matches = [];

    // Name match
    if (person.name.toLowerCase().includes(lowerCaseInput)) {
      personScore += 4;
      matches.push('name');
    }

    // Music genre match
    person.music_genre.every((genre) => {
      if (genre.toLowerCase().includes(lowerCaseInput)) {
        personScore += 1;
        matches.push('genre');
        return false;
      }
      return true;
    });

    // Movie match
    person.movies.every((movie) => {
      if (movie.toLowerCase().includes(lowerCaseInput)) {
        personScore += 1;
        matches.push('movies');
        return false;
      }
      return true;
    });

    // Location match
    if (person.location.toLowerCase().includes(lowerCaseInput)) {
      personScore += 1;
      matches.push('location');
    }

    // Artist match
    person.music_genre.every((genre) => {
      if (genre in artist_by_genre) {
        const joined_artist = artist_by_genre[genre].join(' ');
        if (joined_artist.toLowerCase().includes(lowerCaseInput)) {
          personScore += 2;
          matches.push('artist');
        }
      }
      return true;
    });

    // score must > 0 to return
    if (personScore > 0) {
      score.push({ name: person.name, score: personScore, matches });
    }
  });

  return score.sort(compareFn);
}
