import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './components/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    userName: '',
    activeDisplayId: topicsList[0].id,
    showErrorMsg: false,
    registeredStatus: false,
  }

  changeUserName = userName => {
    this.setState({userName})
  }

  changeTopicName = value => {
    this.setState({activeDisplayId: value})
  }

  updateErrorStatus = () => {
    this.setState(prevState => ({showErrorMsg: !prevState.showErrorMsg}))
  }

  updateRegisteredStatus = () => {
    this.setState(prevState => ({
      registeredStatus: !prevState.registeredStatus,
    }))
  }

  render() {
    const {
      userName,
      activeDisplayId,
      showErrorMsg,
      registeredStatus,
    } = this.state

    return (
      <RegisterContext.Provider
        value={{
          userName,
          activeDisplayId,
          showErrorMsg,
          registeredStatus,
          changeUserName: this.changeUserName,
          changeTopicName: this.changeTopicName,
          updateErrorStatus: this.updateErrorStatus,
          updateRegisteredStatus: this.updateRegisteredStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
