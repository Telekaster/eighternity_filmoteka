import genres from '../data/genres_id.json';

function generateTitle(movie) {
  let title = movie.title;

  if (title.length > 35) {
    title = title.slice(0, 35) + '...';
    return title;
  }
  return title;
}

function generateGenres(movie) {
  let genresId = movie.genre_ids.map(id => {
    return genres.find(genre => genre.id === id).name;
  });
  if (genresId.length > 2) {
    return [genresId.slice(0, 2).join(', '), ' Other'];
  }
  if (genresId.length === 0) {
    return 'No genres';
  }
  return genresId.join(', ');
}

function generateData(movie) {
  if (movie.release_date) {
    const release_date = movie.release_date.slice(0, 4);
    return release_date;
  }

  return 'No release date';
}

export { generateTitle, generateGenres, generateData };
