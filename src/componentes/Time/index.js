import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({nome,corPrimaria,corSecundaria, colaboradores})=>{

     //css inline em 2 formas
     const css = {backgroundColor:corSecundaria} //passada por variavel
    return (
        (colaboradores.length > 0 ) ? <section className='time' style={css}>
        <h3 style={{borderColor:corPrimaria}}>{nome}</h3> {/*ou feito na própria tag */}
        <div className='colaboradores'>
           {colaboradores.map(colaborador=><Colaborador key={colaborador.nome} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo} corDeFundo={corPrimaria}/>)}
       </div>
   </section> : ''
    )
}

export default Time

