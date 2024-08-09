import {Link} from 'react-router-dom'

import RegisterContext from '../RegisterContext'

import Header from '../Header'

import {
  HomeContainer,
  MeetupHeading,
  SubHeading,
  RegisterButton,
  MeetupImageElement,
  RegisteredContainer,
  NameElement,
  TopicElement,
} from '../../styledComponents'

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

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {registeredStatus, userName, activeDisplayId} = value

      const activeDisplayTextArray = topicsList.find(
        eachTopic => eachTopic.id === activeDisplayId,
      )

      const activeDisplayText = activeDisplayTextArray.displayText

      return (
        <>
          <Header />
          {registeredStatus ? (
            <RegisteredContainer>
              <NameElement>Hello {userName}</NameElement>
              <TopicElement>{activeDisplayText}</TopicElement>
              <MeetupImageElement
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </RegisteredContainer>
          ) : (
            <HomeContainer>
              <MeetupHeading>Welcome to Meetup</MeetupHeading>
              <SubHeading>Please register for the topic</SubHeading>
              <Link to="/register">
                <RegisterButton type="button">Register</RegisterButton>
              </Link>
              <MeetupImageElement
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )}
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
