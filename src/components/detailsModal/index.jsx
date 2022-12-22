import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { useForm } from 'react-hook-form'
import { api } from "../../services/api"
import Input from '../input'
import Select from "./select"
import { DivModal, Modal } from "./styles"
import { toast } from 'react-toastify'
import { TechContext } from "../../contexts/TechContext"

const EditModal = () => {
    
    const {register, handleSubmit} = useForm()

    const { setEditModal, techEdit, setTechEdit } = useContext(TechContext)

    const submit = async (data) => {
        const token = localStorage.getItem('token')
        try {
            await api.put(`users/techs/${techEdit.id}`, data)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            setEditModal(false)
            toast.success('Tecnologia atualizada com sucesso!')
        } catch (error) {
            toast(error.response.data.message)
            console.log(error)
        }
    }

    const modalRef = useRef(null)

    useEffect(() => {
        const modalOutClick = (elem) => {
            const target = elem.target
            const element = modalRef.current
            if (!element.contains(target)){
                setEditModal(false)
                setTechEdit('')
            }
        }
        window.addEventListener("mousedown", modalOutClick)
        return () => {
            window.removeEventListener("mousedown", modalOutClick)
        }
    })

    const remove = async () => {
        const token = localStorage.getItem('token')
        try {
            await api.delete(`users/techs/${techEdit.id}`)
            api.defaults.headers.common.authorization = `Bearer ${token}`
            setEditModal(false)
            toast.success('Tecnologia deletada com sucesso!')
        } catch (error) {
            toast(error.response.data.message)
            console.log(error)
        }
    }

    return (
        <Modal>
            <DivModal ref={modalRef}>
                <div>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => {
                        setEditModal(false)
                        setTechEdit('')
                        }}>X</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label='Nome do projeto' type='text' placeholder={techEdit.title} register={register("title")} editTech={true}/>
                    <Select label='Status' register={register("status")}/>
                    <div>
                        <button type="submit">Salvar alterações</button>
                        <button type="button" onClick={() => remove()}className='delete'>Excluir</button>
                    </div>
                </form>
            </DivModal>
        </Modal>
    )
}

export default EditModal