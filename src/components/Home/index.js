import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="heading">Welcome to Meetup</h1>
        <p className="sub-heading">Please register for the topic</p>
        <button type="button" className="register-button">
          Register
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="meetup-image"
        />
      </div>
    )
  }
}

export default Home
