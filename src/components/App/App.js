import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { useHistory, Route, Switch } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';



function App() {
  const history = useHistory();

  function onRegister() {
    history.push('/signin');
  }

  function onLogin() {
    history.push('/movies');
  }

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path='/signup'>
          <Header />
          <Register onRegister={onRegister} />
        </Route>

        <Route path='/signin'>
          <Header />
          <Login onLogin={onLogin} />
        </Route>

        <Route path='/movies'>
          <Header />
          <Movies />
          <Footer />
        </Route>

        <Route path='/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>

        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;