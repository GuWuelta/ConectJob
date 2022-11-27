import styles from './Input.modules.css'

function Input({type, text, name, placeholder, handleOnChange, value}) {
    
    const form = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1em',
        
        label:{
            marginBottom: '.6em',
            fontWeight: 'bold'
        },

        input: {
            padding: '.7em',
            border: '1px solid grey',
            borderRadius: '1px'
        }
    }
    
    
    
    
    return(
    <div style={form}>
        <label style={form.label} htmlFor={name}>{text}:</label>
        <input style={form.input} type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></input>
    </div>
    )
}

export default Input;
