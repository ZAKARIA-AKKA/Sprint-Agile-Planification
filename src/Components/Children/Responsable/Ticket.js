
import '../../../Style/Home/Ticket.css';
import { useState } from "react";



const Ticket = (props) => 
{
    const [showAction, setShowAction] = useState(false);
    return (
        <div className='ticket' onMouseOver={() => setShowAction(true)} onMouseLeave={() => setShowAction(false)}>
            <div className='projectDecoration item2'></div>
            <div className='projectDecoration item1'></div>
            <div className='ticket_info'>     
                <div className='titre'>
                    <h2>Ticket - 1</h2>
                    <div className='line'></div>
                </div>
                <div className='desc'>
                    <p>
                        Project - 1 est une itération de développement de la méthode Scrum. 
                        Il dure généralement entre deux et quatre semaines.
                    </p>
                </div>
            </div>
            {showAction && 
                <div className='ticket_action'>
                    <i className="fa-solid fa-pen-to-square" onClick={() => {props.setPassage('5');props.setOperation('update')}}></i>
                    <i className="fa-solid fa-trash-can" ></i>
                </div>
            }
    </div>
    )
}

export default Ticket;