
import '../../../Style/Home/InputComposante.css';

const InputComposante = ({type,nom,valeur}) => 
{
    
    return (
        <div className='elm'>
            <label>{nom}</label>
            <input type={type} placeholder={nom}/>
        </div>
    )
}

export default InputComposante;