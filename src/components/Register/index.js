import Header from '../Header'

import RegisterContext from '../RegisterContext'

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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        userName,
        showErrorMsg,
        activeDisplayId,
        changeUserName,
        changeTopicName,
        updateErrorStatus,
        updateRegisteredStatus,
      } = value
      console.log(activeDisplayId)

      const onChangeUsername = event => {
        changeUserName(event.target.value)
      }

      const onChangeSelectOption = event => {
        changeTopicName(event.target.value)
      }

      const onSubmitRegisterForm = event => {
        event.preventDefault()

        if (userName === '') {
          updateErrorStatus()
        } else {
          const {history} = props
          history.replace('/')
          updateRegisteredStatus()
        }
      }

      return (
        <>
          <Header />
          <RegistrationContainer>
            <WebsiteRegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormContainer onSubmit={onSubmitRegisterForm}>
              <FormHeading>Let us join</FormHeading>
              <InputContainer>
                <LabelElement htmlFor="name">NAME</LabelElement>
                <InputElement
                  type="text"
                  placeholder="Your name"
                  onChange={onChangeUsername}
                  value={userName}
                  id="name"
                />
              </InputContainer>
              <InputContainer>
                <LabelElement>TOPICS</LabelElement>
                <SelectElement
                  type="dropdown"
                  onChange={onChangeSelectOption}
                  value={activeDisplayId}
                >
                  {topicsList.map(eachTopic => (
                    <OptionElement key={eachTopic.id} value={eachTopic.id}>
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
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
