
import '../../../Style/Home/SprintLine.css';
// import { useState } from "react";



const SprintLine = (props) => 
{
    
    return (
        <div className='sprintLine' style={{'height':props.taille + '%'}}>
            <div className='akka'></div>
            <abbr title='Inisialisation de Projet'><div className='porte'></div></abbr>
            <div className='sprint'></div>
        </div>
    )
}

export default SprintLine;