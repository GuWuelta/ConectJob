import React from 'react'
import { useState, useEffect } from 'react'
import CandidatoCard from '../candidatoCard/CandidatoCard'


export default function ListaDeCandidato(){
    const [candidatos, setCandidatos] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/candidatos', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
        .then(data => {
            console.log(data)
            setCandidatos(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const menu = {
        margin: '0',
        backgroundColor: 'white'
    }

    const div = {
        btnNovoCandidato: {
            position: 'absolute',
            left: '86%',
            top: '17%',
            border: '1.5px solid black',
            borderRadius: '1rem',
            backgroundColor: '#F5C398',
            padding: '1rem',
            fontSize: '1.15vw'
        },

        novoCandidato: {
            textDecoration: 'none',
            color: 'black'
        },

        h1: {
            marginLeft: '7rem',
            paddingTop: '5rem',
            fontSize: '2.5vw',
        },

        h3: {
            marginLeft: '7rem',
            paddingTop: '0.8rem',
            fontSize: '1.3vw'
        },

        botoes: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '45%',
            marginTop: '1.5rem',
            marginLeft: '5.8rem'
        },

        niveis: {
            border: '1.5px solid black',
            borderRadius: '0.5rem',
            backgroundColor: '#F5C398',
            padding: '0.5rem',
            width: '8vw',
            textAlign: 'center'
        },

        tamanho: {
            textDecoration: 'none',
            color: 'black',
            fontSize: '1.3vw'
        }
    }

	return(
                
        <div style={menu}>

            <div style={div.btnNovoCandidato}>
                <a style={div.novoCandidato} href={'/novoCandidato'} >Novo candidato</a>
            </div>

            <h1 style={div.h1}>Lista de candidatos</h1>
            <h3 style={div.h3}>Utilize os bot??es abaixo para filtrar o n??vel de candidato que voc?? deseja</h3>

            <div style={div.botoes}>
                <div style={div.niveis}>
                    <a style={div.tamanho} href={'/estagio'} >Est??gio</a>
                </div>
                <div style={div.niveis}>
                    <a style={div.tamanho} href={'/junior'} >J??nior</a>
                </div>
                <div style={div.niveis}>
                    <a style={div.tamanho} href={'/pleno'} >Pleno</a>
                </div>
                <div style={div.niveis}>
                    <a style={div.tamanho} href={'/senior'} >S??nior</a>
                </div>
            </div>
            
            <div>
                {candidatos.length > 0 &&
                    candidatos.map((candidato) => (<CandidatoCard 
                    id={candidato.id}
                    name={candidato.name}
                    years={candidato.years}
                    mail={candidato.mail}
                    formac={candidato.formac}
                    language={candidato.language} 
                    hist={candidato.hist} 
                    ic={candidato.ic} 
                    niveis={candidato?.niveis?.name}
                    key={candidato.id}
                    />))}
            </div>
            
        
        </div>
	)
}