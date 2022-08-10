
import '../../../Style/Home/StateProject.css';
// import { useState } from "react";


const StateProject = (props) => 
{
    
    const projects = [1,2,3,4,5,6]

    return (
        <div className='stateProject'>
            <div className='title'>
                <h1>PROJECT</h1>
                <h4>STATE</h4>
            </div>
            {projects.map((index) => <div key={index} className='test'>project</div>)}
        </div>
    )
}

export default StateProject;


                
