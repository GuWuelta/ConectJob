import styles from './Select.css'

function Select({text, name, options, handleOnChange, value}) {

  const select = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1em',
    
    label:{
        marginBottom: '.6em',
        fontWeight: 'bold'
    },

    select: {
        padding: '.7em',
        border: '1px solid grey',
        borderRadius: '1px'
    }
}

  return(
    <div style={select}>
        <label style={select.label} htmlFor={name}>{text}:</label>
        <select style={select.select} name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option>Selecione uma opção</option>
            {options.map((option) => (
              <option value={option.id} key={option.id}>{option.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Select;