import '../../../Style/Home/Project.css';
// import { useState } from "react";
const Project = (props) => 
{
    

    const handelClick_1 = () =>{ //button consulter

        props.setPro(props.data)
        fetch('http://localhost:8080/project/sprints/' + props.data.idProject)
            .then(res => res.json())
            .then(res => props.setSprints(res))
        props.setPassage('2')
    }
    const handelClick_2 = () =>{ //button detail

        
        fetch('http://localhost:8080/responsible/list/all')
            .then(res => res.json())
            .then(res => { props.setCreateur(res.filter((user) => user.id === props.data.creatorId))})
        props.setInfo(true)
        props.setProjectDetails(props.data)
    }


    return (

        <div className="project">
            <div className='projectDecoration item1'></div>
            <div className='projectDecoration item2'></div>
            <div className='faceProject'>
                <p>{props.data.titleProject}</p>
                <div className='line'></div>
            </div>
            <div className='backProject'>
                <p>
                    {props.data.descriptionProject}
                </p>
                <div className='action'>
                    
                    <div className='etatAvencement'>
                        <label>25 / 100</label>
                        <div><span></span></div>
                    </div>
                    <div className={props.sign ? 'detail':'detail hov'}>
                        <button onClick={handelClick_2} className={props.sign ? null : 'list'}>Détail</button>
                        {props.sign && <button onClick={handelClick_1}>Consulter</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;