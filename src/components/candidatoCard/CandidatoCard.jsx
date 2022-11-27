
 
function CandidatoCard({id, name, years, mail, formac, language, hist, ic, niveis, handleRemove }) {
   
    const div = {
        display: 'flex',
        padding: '1em',
        border: '1px solid grey',
        borderRadius: '10px',
        width: '60%',
        margin: '5%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3rem',
        
        h4: {
            backgroundColor: '#F5C398',
            color: '#222',
            padding: '.4em',
            marginBottom: '1.3em',
            fontSize: '1.3em',
            border: '1px solid #222',
            borderRadius: '5px',
            marginTop: '0.1rem'
        },

        p: {
            color: '#7a7a7a',
            marginBottom: '1em',
            marginTop: '0em',
            height: '20px',
            paddingLeft: '20px'
            
        },
        span: {
            color: '#222',
            fontWeight: 'bold'
        },
        h6: {
            position: 'aboslute',
            marginLeft: '20rem',
            display: 'flex'
        }

    }
    
    return(
        <div style={div}>
            <h4 style={div.h4}>{name} - {niveis}</h4>
            <div>
                <p style={div.p}>
                    <span style={div.span}>Idade: </span> {years}
                </p>
                <p style={div.p}>
                    <span style={div.span}>E-mail: </span> {mail}
                </p>
                <p style={div.p}>
                    <span style={div.span}>Telefone: </span> {language}
                </p>
                <p style={div.p}>
                    <span style={div.span}>Formação: </span> {formac}
                </p>
                <p style={div.p}>
                    <span style={div.span}>Histórico profissional: </span> {hist}
                </p>
                <p style={div.p}>
                    <span style={div.span}>Informações complementares: </span> {ic}
                </p>
            </div>
        </div>
    )
}

export default CandidatoCard