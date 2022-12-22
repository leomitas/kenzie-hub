import React from 'react'
import { LabelStyled, SelectStyled } from '../../../styles/input'
import { Fieldset } from './styles'

const Select = ({ label, register }) => {
  return (
    <Fieldset>
        <LabelStyled>{label}</LabelStyled>
        <SelectStyled {...register}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </SelectStyled>
    </Fieldset>
  )
}

export default Select