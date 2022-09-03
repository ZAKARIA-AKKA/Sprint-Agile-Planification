
import '../../../Style/Home/SprintLine.css';
import { useState } from "react";



const SprintLine = (props) => 
{
    const [showInfo,setInfo] = useState(false);

    const handelClick_1 = () => {

        fetch('http://localhost:8080/sprint/tasks/' + props.data.idSprint)
            .then(res => res.json())
            .then(res => props.setTasks(res))
        
        props.setPassage('3')
    }

    return (
        <div className='sprintLine' style={{'height':props.taille + '%','marginLeft': props.duree + '%'}}>
            {showInfo && <div className='info'>{props.data.titleSprint}</div>}
            <abbr title={props.data.titleSprint}><div className='porte' onClick={handelClick_1} onMouseOver={() => setInfo(!showInfo)} onMouseLeave={() => setInfo(!showInfo)}></div></abbr>
            <div className='sprint'></div>
        </div>
    )
}

export default SprintLine;