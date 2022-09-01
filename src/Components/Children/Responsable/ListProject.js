
import '../../../Style/Home/ListProject.css';
// import close from '../../../Asset/Static-Img/cross-mark.png'
import { useState, useEffect } from "react";
import Project from './Project';


const ListProject = (props) => {

    const [bullInfo, setInfo] = useState(false);
    const [projects, setProjects] = useState([]); // pour récuperer la liste des projets 
    const [projectDetails, setProjectDetails] = useState(); // pour récuperer les details d'un seule projet et affiché dans la section detail

    useEffect(() => {
        
        fetch('http://localhost:8080/project/list/all')
            .then(res => res.json())
            .then(res => setProjects(res))

    },[])

    return (
        <div className='listProject'>
            <div className='title'>
                <h1>PROJECT</h1>
                <h4>LIST</h4>
            </div>
            {projects.map((project, index) => <Project key={index} data={project} setProjectDetails={setProjectDetails} setInfo={setInfo} sign={false} />)}
            {bullInfo &&
                <section className='info_project'>
                    <header><i className="fa-solid fa-minus" onClick={() => setInfo(false)}></i></header>
                    <section>
                        <h1>{projectDetails.titleProject === null ? 'Project' : projectDetails.titleProject}</h1>
                        <p>
                            {projectDetails.descriptionProject === null ? '...' : projectDetails.descriptionProject}
                        </p>
                        <p>Réaliser par : AKKA ZAKARIA <br />Réf : {projectDetails.idProject === null ? '...' : projectDetails.idProject}</p>
                    </section>
                    <footer>
                        <div className='etat'>Etat : {projectDetails.status === null ? '...' : projectDetails.statusProject}</div>
                        <div className='date'>
                            {`Date de Début : ${projectDetails.startDateProject}`} <br /> {`Date de Fin : ${projectDetails.endDateProject}`}
                        </div>
                    </footer>
                </section>
            }
        </div>
    )
}

export default ListProject;



