import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify"
import { TechProvider } from "./TechContext";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                setLoading(false)
                return
            }
            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        loadUser()
    }, [])

    const login = async (data) => {
        try {
            const response = await api.post('sessions', data)
            window.localStorage.clear()
            localStorage.setItem('token', response.data.token)
            api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
            localStorage.setItem('id', response.data.user.id)
            navigate('/home')
            toast.success("Login feito com sucesso!");
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error)
        }
    }

    const apiRegister = async (data) => {
        try {
          await api.post('users', data)
          navigate('/')
          toast.success('Cadastro feito com sucesso!')
        } catch (error) {
          toast.error(error.response.data.message)
          console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{login, loading, apiRegister}}>
            <TechProvider>
                {children}
            </TechProvider>
        </AuthContext.Provider>
    )
}