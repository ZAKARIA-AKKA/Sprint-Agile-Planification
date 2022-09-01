
import '../../../Style/Home/InputComposante.css';

const InputComposante = ({type,nom,valeur,operation}) => 
{
    
    return (
        <div className='elm'>
            <label>{nom}</label>
            <input type={type} placeholder={nom} value={valeur} onChange={(e) => operation(e.target.value)} disabled={(nom === 'Réf'|| nom === 'Nom-Prenom' )&& 'disabled'}/>
        </div>
    )
}

export default InputComposante;