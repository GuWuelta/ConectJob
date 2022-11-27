import styles from './textarea.css'

function Textarea({type, text, name, placeholder, handleOnChange, value}) {
  
  const form = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1em',
    
    label:{
        marginBottom: '.6em',
        fontWeight: 'bold'
    },

    textarea: {
        padding: '.7em',
        border: '1px solid grey',
        borderRadius: '1px',
        resize: 'none',
        height: '60px'
    }
}

  return(
    <div style={form}>
        <label style={form.label} htmlFor={name}>{text}:</label>
        <textarea style={form.textarea}
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange} 
        value={value}></textarea>
    </div>
  )
}

export default Textarea;