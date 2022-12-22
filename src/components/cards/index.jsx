import React from "react"
import { Button, P, DivTech, H2, Li, Section, Ul } from "./styles"
import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"

const CardList = () => {
    
    const { setAddModal, updateTech, setEditModal, setTechEdit } = useContext(TechContext)

    return (
        <Section>
            <DivTech>
                <H2>Tecnologias</H2>
                <Button onClick={() => setAddModal(true)}>+</Button>
            </DivTech>
            <Ul>
                {updateTech.map((tech) => {
                    return (
                        <button key={tech.id} onClick={() => {
                            setEditModal(true)
                            setTechEdit(tech)
                        }}> 
                            <Li>
                                {tech.title}
                                <P>
                                    {tech.status}
                                </P>
                            </Li>
                        </button>
                    )
                })}
            </Ul>
        </Section>
      
    )
}

export default CardList
