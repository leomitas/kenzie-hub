import logo from '../../assets/Logo.svg'
import React from 'react'
import { ColorGrey0, ColorGrey1, Container, Img, RegisterHeader, RegisterDiv, RegisterButton, Link } from './styles'
import RegisterForm from '../../components/formRegister'

const RegisterPage = () => {
  return (
    <RegisterDiv>
        <RegisterHeader>
            <Img src={logo}/>
            <Link to={'/'}>
              <RegisterButton>Voltar</RegisterButton>
            </Link>
        </RegisterHeader>
        <Container>
          <ColorGrey0>Crie sua conta</ColorGrey0>
          <ColorGrey1>Rápido e grátis, vamos nessa</ColorGrey1>
          <RegisterForm />
        </Container>
    </RegisterDiv>
  )
}

export default RegisterPage