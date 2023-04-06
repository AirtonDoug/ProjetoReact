import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Top from "./components/Top";




function App() {
  const [integrantes, setIntegrantes] = useState([])

const NovoIntegrante = (integrante) =>{
  setIntegrantes([...integrantes,integrante])
}

const colocacao =[
  {
    nome: 'Top 1',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Top 2',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Top 3',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Top 4',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
    
  },

  {
    nome: 'Top 5',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
    
  },
  {
    nome: 'Top 6',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  }


]



  return (
    <div>
      <Banner />
      <Form 
      colocacao = {colocacao.map(top => top.nome)} 
      onSaveIntegrante ={integrante => NovoIntegrante(integrante)}
      />
      {colocacao.map(top => 
      <Top
        key = {top.nome}
        nome = {top.nome}
        corPrimaria = {top.corPrimaria}
        corSecundaria = {top.corSecundaria}
        integrantes = {integrantes.filter(integrante => integrante.top === top.nome)}  
      />)}
    </div>
  )
}

export default App
