import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Main from '../Main/Main';
import './App.css';
import { useHistory, Route, Switch, useLocation, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { useEffect, useState } from 'react';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MoviesApi from '../../utils/MoviesApi';
import { saveMovie, removeSavedMovie, getSaveMovies } from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import * as UserApi from '../../utils/UserApi';
import { fixMovieImagePath, removeNullDataFromMoviesList } from '../../utils/helperFunctions';

import {
  NO_SEARCH_RESULTS,
  SUCCESS_AUTHORIZATION,
  SUCCESS_REGISTRATION,
  USER_DATA_SUCCESSFULLY_UPDATED,
} from '../../utils/responseMessages';

import {
  MOVIES_PAGE,
  SAVED_MOVIES_PAGE,
  MAIN_PAGE,
  SIGNUP_PAGE,
  SIGNIN_PAGE,
  PROFILE_PAGE,
  NOT_FOUND_PAGE,
  SUCCESS_STATUS,
} from '../../utils/constants';

function App() {
  const history = useHistory();
  let location = useLocation();
  const [tooltipStatus, setTooltipStatus] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loader, setLoader] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [savedMoviesSearchResults, setSavedMoviesSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [shortMovieFilter, setShortMovieFilter] = useState(false);

  function toggleShortMovieFilter() {
    setShortMovieFilter((prevState) => !prevState);
  }

  function onRegister({ name, email, password }) {
    auth
      .register({ name, email, password })
      .then(({ _id, name, email }) => {
        if (_id) {
          localStorage.setItem('userId', _id);
          setCurrentUser({ name, email });
          setTooltipStatus(SUCCESS_STATUS);
          setTooltipMessage(SUCCESS_REGISTRATION);
          onLogin({ email, password });
        }
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log('Ошибка:', err);
      });
  }

  function onLogin({ email, password }) {
    auth
      .login({ email, password })
      .then(({ _id }) => {
        if (_id) {
          localStorage.setItem('userId', _id);
          setLoggedIn(true);
          setTooltipStatus(SUCCESS_STATUS);
          setTooltipMessage(SUCCESS_AUTHORIZATION);
          history.push(MOVIES_PAGE);
        }
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log('Ошибка:', err);
      });
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      auth
        .getContent(userId)
        .then(({ _id }) => {
          if (_id) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('userId');
          history.push('/');
        });
    }
  }, [history]);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([UserApi.getUserInfo(), getSaveMovies()])
        .then(([{ _, email, name }, savedMoviesList]) => {
          setCurrentUser({ name, email });
          setSavedMoviesList(savedMoviesList);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function onSignOut() {
    auth
      .onLogOut()
      .then(() => {
        localStorage.removeItem('userId');
        localStorage.removeItem('moviesList');
        localStorage.removeItem('searchResults');
        setSearchResults([]);
        setSavedMoviesList([]);
        setSavedMoviesSearchResults([]);
        setLoggedIn(false);
        history.push(MAIN_PAGE);
      })
      .catch((err) => console.log('err logout:', err));
  }

  function handleSaveMovie(movieCard) {
    const savedMovie = savedMoviesList.find((movie) => movie.movieId === movieCard.id);
    if (savedMovie) {
      handleRemoveMovie(savedMovie);
    } else {
      saveMovie(movieCard).then((moviesIsSavedCard) =>
        setSavedMoviesList((prevSavedMoviesList) => [...prevSavedMoviesList, moviesIsSavedCard])
      );
    }
  }

  function handleRemoveMovie(movieToBeRemoved) {
    const movieId = movieToBeRemoved._id;
    removeSavedMovie(movieId)
      .then((_) => {
        setSavedMoviesList((prevStateSavedMoviesList) =>
          prevStateSavedMoviesList.filter((movie) => movie._id !== movieId)
        );
        return savedMoviesSearchResults;
      })
      .then((_) => {
        setSavedMoviesSearchResults((prevSavedMoviesSearchResults) =>
          prevSavedMoviesSearchResults.filter((movie) => movie._id !== movieId)
        );
      })
      .catch((err) => console.log(err));
  }

  function showLoader(isLoading) {
    isLoading ? setLoader(true) : setLoader(false);
  }

  function showNoResultsMessage(searchResults) {
    searchResults.length === 0 ? setNoResults(true) : setNoResults(false);
  }

  function getAllMoviesData(searchQuery) {
    MoviesApi()
      .then((moviesList) => {
        const moviesWithoutNullData = removeNullDataFromMoviesList(moviesList);
        const moviesWithImagePath = fixMovieImagePath(moviesWithoutNullData);
        showLoader(true);
        localStorage.setItem('moviesList', JSON.stringify(moviesWithImagePath));
        return moviesWithImagePath;
      })
      .then((moviesWithImagePath) => {
        searchMovie(searchQuery, moviesWithImagePath);
      })
      .catch((err) => {
        console.log('Ошибка:', err);
        setErrorMessage(err);
      })
      .finally(() => {
        setTimeout(() => {
          showLoader(false);
        }, 400);
      });
  }

  function searchMovie(searchQuery, moviesList) {
    const searchResults = moviesList.filter(
      (movie) => movie.nameRU.toLowerCase().indexOf(searchQuery) !== -1
    );
    if (location.pathname === MOVIES_PAGE) {
      localStorage.setItem('searchResults', JSON.stringify(searchResults));
      setSearchResults(searchResults);
    } else {
      setSavedMoviesSearchResults(searchResults);
    }

    showNoResultsMessage(searchResults);
  }

  function handleSearchClick(searchQuery) {
    const searchQueryToLowerCase = searchQuery.toLowerCase();
    const movies = JSON.parse(localStorage.getItem('moviesList'));

    if (location.pathname === MOVIES_PAGE && movies === null) {
      getAllMoviesData(searchQueryToLowerCase);
    } else {
      showLoader(true);
      setTimeout(() => {
        showLoader(false);
        if (location.pathname === MOVIES_PAGE) {
          searchMovie(searchQueryToLowerCase, movies);
        } else {
          searchMovie(searchQueryToLowerCase, savedMoviesList);
        }
      }, 400);
    }
    setNoResults(false);
  }

  useEffect(() => {
    setLoader(false);
    setNoResults(false);
    setSavedMoviesSearchResults([]);
    setErrorMessage('');
    setShortMovieFilter(false);
  }, [location]);

  function updateUserProfile(formData) {
    UserApi.updateUserProfileApi(formData)
      .then((formData) => {
        setTooltipStatus(SUCCESS_STATUS);
        setTooltipMessage(USER_DATA_SUCCESSFULLY_UPDATED);
        setCurrentUser(formData);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('searchResults'));
    setSearchResults(movies);
  }, []);

  function goBack() {
    history.goBack();
  }

  function closeAllPopups() {
    setTooltipStatus(false);
    setTooltipMessage('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path={MAIN_PAGE}>
            <Main />
          </Route>

          <Route path={SIGNUP_PAGE}>
            {loggedIn ? (
              <Redirect to={MOVIES_PAGE} />
            ) : (
              <Register onRegister={onRegister} errorMessage={errorMessage} />
            )}
          </Route>

          <Route path={SIGNIN_PAGE}>
            {loggedIn ? (
              <Redirect to={MOVIES_PAGE} />
            ) : (
              <Login onLogin={onLogin} errorMessage={errorMessage} />
            )}
          </Route>

          {loggedIn && (
            <ProtectedRoute
              path={MOVIES_PAGE}
              loggedIn={loggedIn}
              component={Movies}
              handleSearchClick={handleSearchClick}
              loader={loader}
              noResultsToShow={noResults}
              noResultsMessage={NO_SEARCH_RESULTS}
              handleSaveMovie={handleSaveMovie}
              savedMoviesList={savedMoviesList}
              moviesSearchResults={searchResults || []}
              errorMessage={errorMessage}
              toggleShortMovieFilter={toggleShortMovieFilter}
              shortMovieFilter={shortMovieFilter}
            />
          )}

          {loggedIn && (
            <ProtectedRoute
              path={SAVED_MOVIES_PAGE}
              loggedIn={loggedIn}
              component={SavedMovies}
              loader={loader}
              handleSaveMovie={handleRemoveMovie}
              handleSearchClick={handleSearchClick}
              savedMoviesList={savedMoviesList}
              savedMoviesSearchResults={savedMoviesSearchResults || []}
              noResultsToShow={noResults}
              noResultsMessage={NO_SEARCH_RESULTS}
              toggleShortMovieFilter={toggleShortMovieFilter}
              shortMovieFilter={shortMovieFilter}
            />
          )}

          {loggedIn && (
            <ProtectedRoute
              path={PROFILE_PAGE}
              loggedIn={loggedIn}
              component={Profile}
              updateUserProfile={updateUserProfile}
              onSignOut={onSignOut}
            />
          )}

          {loggedIn && (
            <Route path={NOT_FOUND_PAGE}>
              <PageNotFound goBack={goBack} />
            </Route>
          )}
        </Switch>
        <Footer />

        <InfoTooltip
          status={tooltipStatus}
          tooltipMessage={tooltipMessage}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
