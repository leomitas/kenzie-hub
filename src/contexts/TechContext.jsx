import { createContext, useEffect, useState} from "react";
import { api } from "../services/api";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [techEdit, setTechEdit] = useState('')
    const [techs, setTechs] = useState([])
    const [updateTech, setUpdateTech] = useState([])
    const [loadingTech, setLoadingTech] = useState(true)
    const [data, setData] = useState({})
    const id = localStorage.getItem('id')

    const gettechs = () => {
        useEffect(() => {
            const listTechs = async () => {
                try {
                    const response = await api.get(`users/${id}`)
                    setData(response)
                    setTechs(response.data.techs)
                    setUpdateTech(response.data.techs)
                    setLoadingTech(false)
                } catch (error) {
                    console.log(error)
                }
            } 
            listTechs()
        }, [updateTech])
    }
    
    return (
        <TechContext.Provider value={{techs, setTechs, updateTech, setUpdateTech, loadingTech, data, addModal, setAddModal, editModal, setEditModal, techEdit, setTechEdit, gettechs,}}>
            {children}
        </TechContext.Provider>
    )
}