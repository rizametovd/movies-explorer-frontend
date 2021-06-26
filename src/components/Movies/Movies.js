import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies({
  handleSearchClick,
  moviesSearchResults,
  loader,
  noResultsToShow,
  noResultsMessage,
  handleSaveMovie,
  savedMoviesList,
  errorMessage,
  toggleShortMovieFilter,
  shortMovieFilter,
}) {
  return (
    <section className='movies'>
      <SearchForm
        handleSearchClick={handleSearchClick}
        toggleShortMovieFilter={toggleShortMovieFilter}
      />
      <MoviesCardList
        moviesSearchResults={moviesSearchResults}
        loader={loader}
        noResultsToShow={noResultsToShow}
        noResultsMessage={noResultsMessage}
        handleSaveMovie={handleSaveMovie}
        savedMoviesList={savedMoviesList}
        errorMessage={errorMessage}
        shortMovieFilter={shortMovieFilter}
      />
    </section>
  );
}

export default Movies;
