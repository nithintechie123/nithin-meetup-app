import {Component} from 'react'

import './index.css'

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

class Register extends Component {
  state = {userName: '', activeDisplayText: topicsList[0].displayText}

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({activeDisplayText: event.target.value})
  }

  onSubmitRegisterForm = async event => {
    event.preventDefault()
    const {userName, activeDisplayText} = this.state

    const userDetails = {user_name: userName, displaY_text: activeDisplayText}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const {userName, activeDisplayText} = this.state
    console.log(userName, activeDisplayText)

    return (
      <div className="reg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
          className="website-register-image"
        />
        <form className="form-container" onSubmit={this.onSubmitRegisterForm}>
          <h1 className="form-heading">Let us join</h1>
          <div className="input-container">
            <label htmlFor="name" className="label-element">
              Label
            </label>
            <input
              type="text"
              className="input-element"
              placeholder="Your name"
              onChange={this.onChangeUsername}
              value={userName}
            />
          </div>
          <div className="input-container">
            <label className="label-element" htmlFor="topics">
              Topics
            </label>
            <select
              id="topics"
              className="input-element"
              onChange={this.onChangeSelectOption}
              value={activeDisplayText}
            >
              {topicsList.map(eachTopic => (
                <option key={eachTopic.id} className="option-element">
                  {eachTopic.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="register-button">
            Register Now
          </button>
        </form>
      </div>
    )
  }
}

export default Register
