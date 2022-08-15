
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
// import { useState } from "react";



const UpdateTicket = (props) => 
{
    return (
        <form className='formSprint3'>
            <div className='tickets'>
                <div className='createticket'>
                    <label>Ticket</label>
                    <div className='up'>
                        <input type="text" placeholder='Nom de Ticket'/>
                        <input list="ressources" id="mesRessources" name="mesRessources" placeholder='Ressources'/>
                        <datalist id="ressources">
                            <option value='AKKA ZAKARIA'></option>
                            <option value='HAKMI ABDELALIM'></option>
                        </datalist>
                    </div>
                    <div className='down'>
                        <input type="text" placeholder='Description de Ticket'/>
                    </div>
                </div>
            </div>
            <div className='secondBox'>
                <button onClick={() => props.setPassage('4')}>{props.operation === 'update' ? 'MODIFIER' : 'AJOUTER'}</button>
                <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => props.setPassage('4')}/>
            </div>
        </form>
    )
}

export default UpdateTicket;