import React, { useEffect } from 'react'
import logo from '../../assets/Logo.svg'
import { Border, Button, H2, Header, Img, Link, Main, P, Section } from './styles'
import { useNavigate } from 'react-router-dom'
import CardList from '../../components/cards'
import { useContext } from 'react'
import AddModal from '../../components/addModal'
import EditModal from '../../components/detailsModal'
import { TechContext } from '../../contexts/TechContext'

const HomePage = () => {

    const {addModal, loadingTech, data, editModal, gettechs} = useContext(TechContext)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if(token == null) {
        navigate('/')
        }
      }, [token])
      
      const clear = () => {
        window.localStorage.clear()
      }
      
      gettechs()

  return (
    <>
      <Header>
        <Img src={logo}/>
        <Link to={'/'}>
          <Button onClick={clear}>Sair</Button>
        </Link>
      </Header>
      <Main>
        <Border>
          <Section>
            {loadingTech ? (
              <H2>Carregando...</H2>
              ) : (
              <>
                <H2>Olá, {data.data.name}</H2>
                <P>{data.data.course_module}</P>
              </>
            )}
          </Section>
        </Border>
        <CardList />
      </Main>
      {addModal ? <AddModal /> : '' }
      {editModal ? <EditModal /> : '' }
    </>
  )
}

export default HomePage