import React from 'react'
import gustavo from '../../img/gustavo.jpeg'
import taina from '../../img/taina.jpeg'
import kaua from '../../img/kaua.jpeg'
import vinicius from '../../img/vinicius.jpeg'
import luana from '../../img/luana.jpeg'
export default function SobreNos(){

    const menu = {
        margin: '0',
        backgroundColor: 'white'
    }

    const div = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center'
        },

        imagem: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '3rem'
        },

        fotos: {
            width: '70%',
            marginBottom: '1rem',
            marginLeft: '3rem'
        },

        nomes: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },

        h1: {
            marginTop: '2rem',
            marginBottom: '1.5rem'
        },

        p: {
            paddingLeft: '15rem',
            paddingRight: '15rem'
        }
    }

    return(
        <div style={menu}>
            <div style={div.main}>
                <h1 style={div.h1}>Sobre Nós</h1>
                <p style={div.p}>A ConectJob foi pensada e desenvolvida com o propósito de promover uma maior fluidez nos processos seletivos e nas relações de empresa e candidato. Nós utilizamos um sistema no qual a empresa escolhe o candidato que vai participar do seu processo seletivo, filtrando com precisão o que ela realmente busca, evitando assim possíveis candidatos que não seriam adequados à vaga, fazendo com que ambos os lados perdessem tempo.</p>
                <div style={div.imagem}>
                    <div style={div.nomes}>
                        <img style={div.fotos} src={gustavo} alt="Gustavo" />
                        <h3>Gustavo Wuelta</h3>
                    </div>
                    <div style={div.nomes}>
                        <img style={div.fotos} src={taina} alt="Taina" />
                        <h3>Tainá Almeida</h3>
                    </div>
                    <div style={div.nomes}>
                        <img style={div.fotos} src={kaua} alt="Kaua" />
                        <h3>Kauã Borge</h3>
                    </div>
                    <div style={div.nomes}>
                        <img style={div.fotos} src={luana} alt="Luana" />
                        <h3>Luana Mitsudo</h3>
                    </div>
                    <div style={div.nomes}>
                        <img style={div.fotos} src={vinicius} alt="Vinicius" />
                        <h3>Vinicius Mota</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}