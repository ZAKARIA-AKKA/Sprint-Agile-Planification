import '../../../Style/Home/SprintOrTicket.css';
import { useState } from "react";

const SprintOrTicket = (props) => 
{
    const [showOwner, setShowOwner] = useState(false);

    const handelClick_1 = () => {

        fetch('http://localhost:8080/sprint/tasks/' + props.data.idSprint)
            .then(res => res.json())
            .then(res => props.setTasks(res))
        
        props.setPassage('3')
    }

    return (
        <>
        {props.choix === 'sprint' ? 

        <div className="sprintOrTicket" onClick={handelClick_1}>
            <div className='info'>
                <div className='projectDecoration item2'></div>
                <div className='projectDecoration item1'></div>
                <div className='titre'>
                    <h2>Sprint - 1</h2>
                    <div className='line'></div>
                </div>
                <div className='desc'>
                    <p>
                        Project - 1 est une itération de développement de la méthode Scrum. 
                        Il dure généralement entre deux et quatre semaines.
                    </p>
                </div>
            </div>
        </div>
        :
        <div className="uneTache" onMouseOver={() => setShowOwner(true)} onMouseLeave={() => setShowOwner(false)}>
            <div className='tache'>
                <div className='titre'>TICKET - 1</div>
                {showOwner && 
                <div className='owner'>
                    <div className='line'></div>
                    <i className="fa-solid fa-user-tag"> : AKKA ZAKARIA</i>
                    <p>
                        Project - 1 est une itération de développement de la méthode Scrum. 
                        Il dure généralement entre deux et quatre semaines.
                    </p>
                </div>}
            </div>
        </div>
        }
        
        
        </>
    )
}

export default SprintOrTicket;