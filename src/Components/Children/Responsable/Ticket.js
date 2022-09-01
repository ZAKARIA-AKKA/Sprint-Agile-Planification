
import '../../../Style/Home/Ticket.css';
import { useState } from "react";



const Ticket = (props) => 
{
    const [showAction, setShowAction] = useState(false);

    const deleteTask = () => {
        let id = props.task.idTask;
        fetch('http://localhost:8080/task/delete/'+ id)
        props.setWork(true);
    }
    return (
        <div className='ticket' onMouseOver={() => setShowAction(true)} onMouseLeave={() => setShowAction(false)}>
            <div className='projectDecoration item2'></div>
            <div className='projectDecoration item1'></div>
            <div className='ticket_info'>     
                <div className='titre'>
                    <h2>{props.task.titleTask}</h2>
                    <div className='line'></div>
                </div>
                <div className='desc'>
                    <p>{props.task.descriptionTask}</p>
                </div>
            </div>
            {showAction && 
                <div className='ticket_action'>
                    <i className="fa-solid fa-pen-to-square" onClick={() => {props.setPassage('5');props.setOperation('update');props.setDataTaskUpdate(props.task)}}></i>
                    <i className="fa-solid fa-trash-can" onClick={deleteTask}></i>
                </div>
            }
    </div>
    )
}

export default Ticket;