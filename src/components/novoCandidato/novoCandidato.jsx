
import { useNavigate } from 'react-router-dom'

import CandidatoForm from '../candidatoForm/CandidatoForm'

import styles from './NovoCandidato.module.css'

function NovoCandidato() {
  const history = useNavigate()

  const title = {
    marginLeft: '5rem',
    fontFamily: 'Times new roman',
    fontWeight: 'bold',
  }

  function createPost(candidato) {
    // initialize cost and services
    /* candidato.nome = []
    candidato.idadee = []
    candidato.emaill = []
    candidato.formacaoo = []
    candidato.idiomaa = []
    candidato.historico = []
    candidato.infos = [] */

    fetch('http://localhost:5000/candidatos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidato),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history('/listaDeCandidato', alert('Cadastro realizado com sucesso!'))
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1 style={title}>Cadastrar Candidato</h1>
      <CandidatoForm handleSubmit={createPost}></CandidatoForm>
    </div>
  )
}

export default NovoCandidato