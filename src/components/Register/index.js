import {Component} from 'react'

import {
  RegistrationContainer,
  WebsiteRegisterImage,
  FormContainer,
  FormHeading,
  InputContainer,
  LabelElement,
  InputElement,
  SelectElement,
  RegisterButton,
  ErrorMessage,
  OptionElement,
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

class Register extends Component {
  state = {
    userName: '',
    activeDisplayId: topicsList[0].id,
    showErrorMsg: false,
    registeredStatus: false,
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({activeDisplayId: event.target.value})
  }

  onSubmitRegisterForm = async event => {
    event.preventDefault()
    const {userName} = this.state

    if (userName === '') {
      this.setState({showErrorMsg: true})
    } else {
      const {history} = this.props
      history.replace('/')
      this.setState(prevState => ({
        registeredStatus: !prevState.registeredStatus,
      }))
    }
  }

  render() {
    const {userName, activeDisplayId, showErrorMsg} = this.state

    return (
      <RegistrationContainer>
        <WebsiteRegisterImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <FormContainer onSubmit={this.onSubmitRegisterForm}>
          <FormHeading>Let us join</FormHeading>
          <InputContainer>
            <LabelElement htmlFor="name">Label</LabelElement>
            <InputElement
              type="text"
              placeholder="Your name"
              onChange={this.onChangeUsername}
              value={userName}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="topics">Topics</LabelElement>
            <SelectElement
              id="topics"
              onChange={this.onChangeSelectOption}
              value={activeDisplayId}
            >
              {topicsList.map(eachTopic => (
                <OptionElement key={eachTopic.id}>
                  {eachTopic.displayText}
                </OptionElement>
              ))}
            </SelectElement>
          </InputContainer>
          <RegisterButton type="submit">Register Now</RegisterButton>
          {showErrorMsg ? (
            <ErrorMessage>Please enter your name</ErrorMessage>
          ) : null}
        </FormContainer>
      </RegistrationContainer>
    )
  }
}

export default Register
