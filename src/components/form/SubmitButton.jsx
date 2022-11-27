import styles from './SubmitButton.module.css'

function SubmitButton({ text }) {

  const btn = {
    backgroundColor: '#F28444',
    color: '#222',
    padding: '0.7em 1.2em',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    marginLeft: '160px',
    fontWeight: 'bold',
    fontSize: '15px',
    border: '1px solid #222',
    borderRadius: '5%',
  }

  return(
    <div>
        <button style={btn}>Cadastrar</button>
    </div>
  )
}

export default SubmitButton;