import React from 'react'
import { InputStyled, LabelStyled } from '../../styles/input'
import { Fieldset } from './styles'

const Input = ({label, type, placeholder, register, editTech}) => {
  return (
    <Fieldset>
        <LabelStyled>{label}</LabelStyled>
        {editTech ? <InputStyled type={type} placeholder={placeholder} {...register} disabled /> : <InputStyled type={type} placeholder={placeholder} {...register} />}
    </Fieldset>
  )
}

export default Input