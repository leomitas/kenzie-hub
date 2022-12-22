import React from 'react'
import { LabelStyled, SelectStyled } from '../../styles/input'
import { Fieldset } from './styles'

const Select = ({ label, register }) => {
  return (
    <Fieldset>
        <LabelStyled>{label}</LabelStyled>
        <SelectStyled {...register}>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
        </SelectStyled>
    </Fieldset>
  )
}

export default Select