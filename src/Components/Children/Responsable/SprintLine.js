
import '../../../Style/Home/SprintLine.css';
import { useState } from "react";



const SprintLine = (props) => 
{
    const [showInfo,setInfo] = useState(false)
    return (
        <div className='sprintLine' style={{'height':props.taille + '%','marginLeft': props.duree + '%'}}>
            {showInfo && <div className='info'></div>}
            <abbr title='Inisialisation de Projet'><div className='porte' onMouseOver={() => setInfo(!showInfo)} onMouseLeave={() => setInfo(!showInfo)}></div></abbr>
            <div className='sprint'></div>
        </div>
    )
}

export default SprintLine;