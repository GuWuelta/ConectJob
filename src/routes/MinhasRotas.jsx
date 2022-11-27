import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ListaDeCandidato from '../components/listaDeCandidato/ListaDeCandidato'
import EmpresasEnvolvidas from '../components/empresasEnvolvidas/EmpresasEnvolvidas'
import SobreNos from '../components/sobreNos/SobreNos'
import Home from '../components/home/Home'
import Estagio from '../components/perfil1/Estagio'
import Junior from '../components/perfil2/Junior'
import Pleno from '../components/perfil3/Pleno'
import Senior from '../components/perfil4/Senior'
import NovoCandidato from '../components/novoCandidato/novoCandidato'


export default function MinhasRotas(){
	return(
		<>
			<Routes>
                
                <Route path="/" element={<Home/>}/>
				<Route path="/listaDeCandidato" element={<ListaDeCandidato/>}/>
                <Route path="/empresasEnvolvidas" element={<EmpresasEnvolvidas/>}/>
                <Route path="/sobreNos" element={<SobreNos/>}/>
                <Route path="/estagio" element={<Estagio/>}/>
                <Route path="/junior" element={<Junior/>}/>
                <Route path="/pleno" element={<Pleno/>}/>
                <Route path="/senior" element={<Senior/>}/>
                <Route path="/novoCandidato" element={<NovoCandidato/>}/>
                
			</Routes>
		</>
	)
}