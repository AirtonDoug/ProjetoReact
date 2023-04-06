
import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [top,setTop] = useState('')

    
    const onSave = (event) =>{
        event.preventDefault()
        props.onSaveIntegrante({
            nome,
            descricao,
            imagem,
            top
        })
        setNome('')
        setDescricao('')
        setImagem('')
        setTop('')
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <TextField
                    label="Nome"
                    placeholder="Digite nome do integrante do ap"
                    obrigatorio = {true}
                    onChange = {valor => setNome(valor)}
                />
                <TextField
                    label="Descrição"
                    placeholder="Digite descrição do Integrante"
                    obrigatorio = {true}
                    onChange = {valor => setDescricao(valor)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite url da imagem do integrante"
                    onChange = {valor => setImagem(valor)}              
                />
                <DropdownList
                    label="Posição no rank:"
                    itens={props.colocacao}
                    obrigatorio = {true}
                    onChange = {valor => setTop(valor)}
                />
                <Button>
                    Adicionar Integrante
                </Button>
            </form>
        </section>
    )
}

export default Form