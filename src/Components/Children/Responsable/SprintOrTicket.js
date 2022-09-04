import '../../../Style/Home/SprintOrTicket.css';
import { useEffect, useState } from "react";

const SprintOrTicket = (props) => 
{
    const [showOwner, setShowOwner] = useState(false);
    const [creator, setCreator] = useState('');

    const handelClick_1 = () => {

        fetch('http://localhost:8080/sprint/tasks/' + props.data.idSprint)
            .then(res => res.json())
            .then(res => props.setTasks(res))
        
        props.setPassage('3')
    }

    useEffect(() => {
        
        if(props.choix === 'ticket')
        {
            fetch('http://localhost:8080/resource/list/all')
                .then(res => res.json())
                .then(res => {
                    let u = res.filter((user) => user.id === props.data.employeeId)
                    setCreator(u[0].firstName  + ' ' + u[0].lastName)
                })
        }
    },[])


    return (
        <>
        {props.choix === 'sprint' ? 

        <div className="sprintOrTicket" onClick={handelClick_1}>
            <div className='info'>
                <div className='projectDecoration item2'></div>
                <div className='projectDecoration item1'></div>
                <div className='titre'>
                    <h2>{props.data.titleSprint}</h2>
                    <div className='line'></div>
                </div>
                <div className='desc'>
                    <p>
                        {props.data.descriptionSprint}
                    </p>
                </div>
            </div>
        </div>
        :
        <div className="uneTache" onMouseOver={() => setShowOwner(true)} onMouseLeave={() => setShowOwner(false)}>
            <div className='tache'>
                <div className='titre'>{props.data.titleTask}</div>
                {showOwner && 
                <div className='owner'>
                    <div className='line'></div>
                    <i className="fa-solid fa-user-tag"> : {creator}</i>
                    <p>
                        {props.data.descriptionTask}
                    </p>
                </div>}
            </div>
        </div>
        }
        
        
        </>
    )
}

export default SprintOrTicket;