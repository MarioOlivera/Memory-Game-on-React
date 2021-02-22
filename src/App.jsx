import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Welcome from './views/Welcome';
import Game from './views/Game';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game" exact render={ props => <Game {...props} />}/>
        <Route path="/" render={ props => <Welcome {...props} />}/>
      </Switch>
    </Router>
  );
}

export default App;
