import {Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
