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

const AddModal = () => {
    
    const {register, handleSubmit} = useForm()

    const { setAddModal, updateTech, setUpdateTech } = useContext(TechContext)

    const submit = async (data) => {
        const token = localStorage.getItem('token')
        if(token) {
            try {
                const response = await api.post('users/techs', data)
                api.defaults.headers.common.authorization = `Bearer ${token}`
                setAddModal(false)
                setUpdateTech([...updateTech, response.data])
                toast.success('Tecnologia criada com sucesso')
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error)
            }
        }
    }

    const modalRef = useRef(null)

    useEffect(() => {
        const modalOutClick = (elem) => {
            const target = elem.target
            const element = modalRef.current
            if (!element.contains(target)){
                setAddModal(false)
            }
        }
        window.addEventListener("mousedown", modalOutClick)
        return () => {
            window.removeEventListener("mousedown", modalOutClick)
        }
    })

    return (
        <Modal>
            <DivModal ref={modalRef}>
                <div>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setAddModal(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label='Nome' type='text' placeholder='Digite o nome da tecnologia' register={register("title")}/>
                    <Select label='Selecionar status' register={register("status")}/>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </DivModal>
        </Modal>
    )
}

export default AddModal