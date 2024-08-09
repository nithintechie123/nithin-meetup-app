import {Link} from 'react-router-dom'

import {Component} from 'react'

import {
  HomeContainer,
  MeetupHeading,
  SubHeading,
  RegisterButton,
  MeetupImageElement,
} from '../../styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeContainer className="home-container">
        <MeetupHeading className="heading">Welcome to Meetup</MeetupHeading>
        <SubHeading className="sub-heading">
          Please register for the topic
        </SubHeading>
        <Link to="/register">
          <RegisterButton type="button" className="register-button">
            Register
          </RegisterButton>
        </Link>
        <MeetupImageElement
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="meetup-image"
        />
      </HomeContainer>
    )
  }
}

export default Home
