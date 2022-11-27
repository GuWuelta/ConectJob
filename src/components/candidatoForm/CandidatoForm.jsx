import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import Textarea from '../form/textarea'
import SubmitButton from '../form/SubmitButton'

import styles from './CandidatoForm.modules.css'

function CandidatoForm({ handleSubmit, candidatoData }) {
  const [candidato, setCandidato] = useState(candidatoData || {})
  const [niveis, setNiveis] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/niveis', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNiveis(data)
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(candidato)
  }

  function handleChange(e) {
    setCandidato({ ...candidato, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setCandidato({
      ...candidato,
      niveis: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  const form = {
    marginTop: '0.2rem',
    backgroundColor: '#ffffff'
  }

  return (
    <form onSubmit={submit} style={form}>
      <fieldset>
      <Input
        type="text"
        text="Nome do candidato"
        name="name"
        placeholder="Insira o nome do candidato..."
        handleOnChange={handleChange}
        value={candidato.nome}
      />
      <Input
        type="text"
        text="Idade"
        name="years"
        placeholder="Insira a idade..."
        handleOnChange={handleChange}
        value={candidato.idadee}
      />
      <Input 
        type="text" 
        text="Email" 
        name="mail" 
        placeholder="Insira seu e-mail..." 
        handleOnChange={handleChange} 
        value={candidato.emaill}
        />
        <Input 
        type="text" 
        text="Formação" 
        name="formac" 
        placeholder="Insira sua formação..." 
        handleOnChange={handleChange} 
        value={candidato.formacaoo}/>
      <Input 
      type="text" 
      text="Telefone" 
      name="language" 
      placeholder="Insira seu telefone..." 
      handleOnChange={handleChange} 
      value={candidato.idiomaa} 
      />
      <Textarea 
      type="textarea" 
      text="Histórico profissional" 
      name="hist" 
      placeholder="Insira suas experiências profissionais..." 
      handleOnChange={handleChange} 
      value={candidato.historico}
      />
        <Textarea 
        type="textarea" 
        text="Informações complementares" 
        name="ic" 
        placeholder="Insira informações complementares..." 
        handleOnChange={handleChange} 
        value={candidato.infos}
        />
        <Select
        name="category_id"
        text="Selecione o nível"
        options={niveis}
        handleOnChange={handleCategory}
        value={candidato.niveis ? candidato.niveis.id : ''}
      />


      <SubmitButton/>
      </fieldset>
    </form>
  )
}

export default CandidatoForm