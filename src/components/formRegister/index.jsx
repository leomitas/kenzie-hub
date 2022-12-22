import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../input'
import Select from '../select';
import { ButtonRegister, FormRegister } from './styles';
import { registerSchema } from './registerSchema';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
      resolver: yupResolver(registerSchema)
    })

    const { apiRegister } = useContext(AuthContext)

  return (
    <FormRegister onSubmit={handleSubmit(apiRegister)} noValidate>
        <Input label='Nome' type='text' placeholder='Digite seu nome' register={register("name")} />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <Input label='E-mail' type='email' placeholder='Digite seu e-mail' register={register("email")} />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <Input label='Senha' type='password' placeholder='Digite sua senha' register={register("password")} />
        {errors.password?.message && <p>{errors.password.message}</p>}
        
        <Input label='Confirmar Senha' type='password' placeholder='Digite sua Confirmar Senha' register={register("checkPassword")} />
        {errors.checkPassword?.message && <p>{errors.checkPassword.message}</p>}

        <Input label='Bio' type='text' placeholder='Digite sua Bio' register={register("bio")} />
        {errors.bio?.message && <p>{errors.bio.message}</p>}

        <Input label='Contato' type='text' placeholder='Digite sua Contato' register={register("contact")} />
        {errors.contact?.message && <p>{errors.contact.message}</p>}

        <Select label='Selecionar módulo' register={register("course_module")}/>

        <ButtonRegister type='submit'>Cadastrar</ButtonRegister>
    </FormRegister>
  )
}

export default RegisterForm
