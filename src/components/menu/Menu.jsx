import React from 'react'
import {Link} from "react-router-dom"
import ConectJob from '../../img/ConectJob.png'
import MinhasRotas from '../../routes/MinhasRotas'
export default function Menu(){

    const menu = {
        margin: '0rem',
        backgroundColor: '#F5C398'
    }

    const div = {
        largura: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        ul: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            listStyle: 'none',
            marginTop: '2.5rem'
        },

        link: {
            textDecoration: 'none',
            color: 'black',
            fontSize: '1.3vw'
        },

        nav: {
            marginRight: '4rem'
        }

    }

	return(
        <div style={menu}>
            <div style={div.largura}>
                <img src={ConectJob} alt="Logo" />
                <div style={div.nav}>
                    <nav>
                        <ul style={div.ul}>
                            <li><Link to="/" style={div.link}>Home</Link></li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/listaDeCandidato" style={div.link}>Lista de Candidato</Link></li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/empresasEnvolvidas" style={div.link}>Empresas Envolvidas</Link></li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/sobreNos"  style={div.link}>Sobre Nós</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <MinhasRotas/>
            </div>
        </div>
	)
}