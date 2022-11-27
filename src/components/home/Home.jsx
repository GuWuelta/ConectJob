import React from 'react'
import tempo from '../../img/tempo.png'
import facilidade from '../../img/facilidade.png'
import lampada from '../../img/lampada.png'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'
import github from '../../img/github.png'
import email from '../../img/email.png'
import linkedin from '../../img/linkedin.png'
import emprego from '../../img/emprego.png'

export default function Home(){

    const menu = {
        margin: '0',
        backgroundColor: "white"
    }
    
    const div = {
        main: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#F5C398'
        },

        texto: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            fontSize: '1.5vw',
            textAlign: 'center',
            marginLeft: '5rem',
            marginTop: '5rem'
        },

        img: {
            marginLeft: '14rem',
            width: '40rem',
            paddingBottom: '3rem',
            borderRadius: '10rem'
        },

        h1: {
            marginBottom: '2rem',
            marginLeft: 'rem',
            paddingTop: '50px'
        },

        vantagem: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center'
        },

        item: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginRight: '2rem'
        },

        margem: {
            marginTop: '2rem',
            marginBottom: '3rem'
        },

        imagem: {
            width: '7vw',
            marginBottom: '1rem'
        },

        footer: {
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: '43%',
            marginTop: '5rem',
            marginBottom: '2.5rem'
        },

        redes: {
            width: '2.5vw',
            marginRight: '0.4rem'
        },

        small: {
            marginLeft: '43%',
            paddingBottom: '1rem'
        },

        p: {
            fontSize: '1vw'
        },

        emprego: {
            position: 'aboslute',
            marginTop: '50rem'
        }
    }

	return(

        <div style={menu}>
            <div style={div.main}>
                <div style={div.texto}>
                <h1 style={div.h1}>Facilitamos o recrutamento <br/> para sua empresa</h1>
                    <p style={div.p}>Trazer mais candidatos qualificados para seus processos, com perfis e objetivos compatíveis aos da sua empresa, a nossa plataforma fará toda a diferença na hora da busca. Com os filtros da triagem de currículos fica mais fácil identificar os profissionais que combinam com cada cargo. Dessa forma, as chances de encontrar os profissionais certos para a sua empresa são ampliadas.</p>
                    
                </div>
                <img style={div.img} src={emprego} alt="Tela Principal" />
            </div>
            <div style={div.vantagem}>
                <h1 style={div.margem}>Vantagens da nossa empresa</h1>
                <div style={div.item}>
                    <div>
                        <img style={div.imagem} src={tempo} alt="Tempo" />
                        <h3>Tempo economizado.</h3>
                    </div>
                    <div>
                        <img style={div.imagem} src={lampada} alt="Lampada" />
                        <h3>Escolha do profissional<br/>perfeito para a vaga.</h3>
                    </div>
                    <div>
                        <img style={div.imagem} src={facilidade} alt="Facilidade" />
                        <h3 >Facilidade.</h3>
                    </div>
                
                    
                </div>
            </div>
            <footer>
                <div style={div.footer}>
                    <a target="_blank" href="https://www.instagram.com/"><img style={div.redes} src={instagram} alt="Instagram" /></a>
                    <a target="_blank" href="https://www.facebook.com/"><img style={div.redes} src={facebook} alt="Facebook" /></a>
                    <a target="_blank" href="https://github.com/"><img style={div.redes} src={github} alt="GitHub" /></a>
                    <a target="_blank" href="https://www.linkedin.com/"><img style={div.redes} src={linkedin} alt="LinkedIn" /></a>
                    <a target="_blank" href="https://www.google.com/intl/pt-BR/gmail/about/"><img style={div.redes} src={email} alt="E-mail" /></a>
                    <a target="_blank" href="https://www.whatsapp.com/?lang=pt_br"><img style={div.redes} src={whatsapp} alt="WhatsApp" /></a>
                </div>
                <small style={div.small}>&copy;ConectJob. Todos os direitos reservados</small>
            </footer>
        </div>

	)
}