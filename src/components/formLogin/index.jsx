import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../input'
import { ButtonLogin, FormLogin } from './styles';
import { loginSchema } from './loginSchema';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm = () => {
    const { login } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema)
    })

    return (
      <FormLogin onSubmit={handleSubmit(login)} noValidate>
          <Input label='E-mail' type='email' placeholder='Digite seu e-mail' register={register("email")} />
          {errors.email?.message && <p>{errors.email.message}</p>}

          <Input label='Senha' type='password' placeholder='Digite sua senha' register={register("password")} />
          {errors.password?.message && <p>{errors.password.message}</p>}

          <ButtonLogin type='submit'>Entrar</ButtonLogin>
      </FormLogin>
    )
}

export default LoginForm
