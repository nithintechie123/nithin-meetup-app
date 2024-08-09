import React from 'react'

const RegisterContext = React.createContext({
  userName: '',
  activeDisplayId: 'Arts and Culture',
  registeredStatus: false,
  showErrorMsg: false,
  changeUserName: () => {},
  changeTopicName: () => {},
  updateErrorStatus: () => {},
  updateRegisteredStatus: () => {},
})

export default RegisterContext
