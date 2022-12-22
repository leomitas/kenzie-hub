import logo from '../../assets/Logo.svg'
import React from 'react'
import { Button, ColorGrey0, ColorGrey1, Container, Img, Main, Link } from './styles'
import LoginForm from '../../components/formLogin'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(() => {
    if(token) {
      navigate('/home')
    }
  })
  return (
    <Main>
        <Img src={logo}/>
        <Container>
          <ColorGrey0>Login</ColorGrey0>
          <LoginForm />
          <ColorGrey1>Ainda não possui uma conta?</ColorGrey1>
          <Link to={'/register'}>
            <Button>Cadastre-se</Button>
          </Link>
        </Container>
    </Main>
  )
}

export default LoginPage