
import '../../../Style/Home/Ticket.css';
// import { useState } from "react";



const Ticket = (props) => 
{
    return (
        <div className='ticket'>            
            <div className='ticket_owner'>
                <div className='desc'>
                    <p>Tache - 1 est une itération de développement de la méthode Scrum. Il dure généralement entre deux et quatre semaines. </p>
                </div>
                <div className='owner'>
                    <p>AKKA ZAKARIA</p>
                </div>
            </div>
            <div className='ticket_action'>
                <i className="fa-solid fa-pen-to-square" onClick={() => {props.setPassage('5');props.setOperation('update')}}></i>
                <i className="fa-solid fa-trash-can" ></i>
            </div>
        </div>
    )
}

export default Ticket;