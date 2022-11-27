import React from 'react'
import FIAP from '../../img/FIAP.png'
import IBM from '../../img/IBM.png'
import triangulo from '../../img/triangulo.png'


export default function App(){

    const menu = {
        margin: '0',
        backgroundColor: "white"
    }

    const div = {
        triangulo: {
            width: '30vw'
        },

        empresa: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },

        imagem: {
            height: '32%',
            width: '34%',
            marginRight: '6rem'
        },

        margem: {
            marginTop: '11rem'
        }
    }

    return(
        <div style={menu}>
            <div style={div.empresa}>
                <img style={div.triangulo} src={triangulo} alt="" />
                <div style={div.margem}>
                    <img style={div.imagem} src={FIAP} alt="fiap" />
                    <img style={div.imagem} src={IBM} alt="ibm" />
                </div>
            </div>
        </div>
    )
}