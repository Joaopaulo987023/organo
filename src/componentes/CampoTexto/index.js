
import './CampoTexto.css'



const CampoTexto = (props)=>{
    // let valor = 'Guilherme Silveira';
   
   
    const placehoulderModificado=`${props.placeholder}...`

   
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor}  onChange={evento => props.aoAlterar(evento.target.value)} required={props.obrigatorio} placeholder={placehoulderModificado}></input>
        </div>
    )
}
export default CampoTexto