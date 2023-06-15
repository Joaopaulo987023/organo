import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'
const Formulario = (props) => {
    
    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('') // hook
    const [time,setTime] = useState();


    const aoSalvar=(evento)=>{
        evento.preventDefault()
        console.log('Form foi submetido =>',nome,cargo,imagem)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            time,
            imagem
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    
   
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                
                <h2>Preencha os dados para criar um card do colaborador</h2>
                <CampoTexto 
                obrigatorio={true} label='Nome'
                placeholder='Digite o seu nome' 
                valor={nome}
                aoAlterar={valor => setNome(valor)}/>

                <CampoTexto obrigatorio={true}label='Cargo' 
                placeholder='Digite o seu cargo' 
                valor={cargo}
                aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto obrigatorio={true} 
                label='Imagem' 
                placeholder='Digite o endereço da imagem' 
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true}
                 label='Time'itens = {props.times}
                 valor={time}
                 aoAlterar={valor => setTime(valor)}
                 />
                <Botao texto='Criar Card'/>
                
            </form>
        </section>

    )
}
export default Formulario