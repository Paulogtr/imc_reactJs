import './information.css'

function Information(props) {

  return (
    
    <div className='containerInform'>
      <p id='testando'>Olá <span id='usuario'>{props.name}</span>, o sue IMC é: {props.imc} </p>
    </div>
    
  )

}



export default Information