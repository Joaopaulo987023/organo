

import {useState} from 'react'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time'
import Rodape from './componentes/Rodape';



function App() {

  const times = [
    {
    nome:'Programação',
    corPrimaria:'#57C278',
    corSecundaria:'#D9F7E9'
   },
   {
    nome:'Front-End',
    corPrimaria:'#82CFFA',
    corSecundaria:'#E8F8FF'
   },
   {
    nome:'Data Science',
    corPrimaria:'#A6D157',
    corSecundaria:'#F0F8E2'
   },
   {
    nome:'Devops',
    corPrimaria:'#E06B69',
    corSecundaria:'#FDE7E8'
   },
   {
    nome:'Ux e Design',
    corPrimaria:'#DB6EBF',
    corSecundaria:'#FAE9F5'
   },
   {
    nome:'Mobile',
    corPrimaria:'#FFBA05',
    corSecundaria:'#FFF5D9'
   },
   {
    nome:'Inovação e Gestão',
    corPrimaria:'#FF8A29',
    corSecundaria:'#FFEEDF'
   }
]

  const[colaboradores, setColaboradores]=useState([])
  const aoNovoColaboradorAdicionado = (colaborador)=>{
      setColaboradores([...colaboradores,colaborador]) // espalhando os colaboradores antigos e colocando um novo na frente
      
  }

   
  return (
    <div className="App">
     <Banner/>
     <Formulario aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdicionado(colaborador)}
      times={times.map(time=>time.nome)}/> 
      {/* //transformando a lista de objeto em um lista de strings */}
     {times.map(time=><Time nome={time.nome} 
     key={time.nome} 
     corPrimaria={time.corPrimaria}
     corSecundaria={time.corSecundaria}
     colaboradores={colaboradores.filter(colaborador =>colaborador.time === time.nome)} //passando apenas os colaboradores com o time escolhido
     />)}
     <Rodape/>
    </div>
  );
}

export default App;

