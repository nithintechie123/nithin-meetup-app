import {React} from 'react'

const RegisterContext = React.createContext({
  userName: '',
  activeDisplayId: 'ARTS_AND_CULTURE',
  registeredStatus: false,
  showErrorMsg: false,
})

export default RegisterContext
