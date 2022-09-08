
import '../../../Style/Home/ListProject.css';
// import close from '../../../Asset/Static-Img/cross-mark.png'
import { useState, useEffect } from "react";
import Project from './Project';


const ListProject = (props) => {

    const [bullInfo, setInfo] = useState(false);
    const [projects, setProjects] = useState([]); // pour récuperer la liste des projets 
    const [projectDetails, setProjectDetails] = useState(); // pour récuperer les details d'un seule projet et affiché dans la section detail
    const [createur, setCreateur] = useState()
    useEffect(() => {

        fetch('http://localhost:8080/project/list/all')
            .then(res => res.json())
            .then(res => setProjects(res))
    }, [])

    useEffect(() => {

        setProjects(props.proList)

    }, [props.proList])

    const deleteProject = () => {

        if (window.confirm("Etes-vous sur ? ^ ^")) {

            fetch('http://localhost:8080/project/delete/' + projectDetails.idProject)
                .then(() => {
                    fetch('http://localhost:8080/project/list/all')
                        .then(res => res.json())
                        .then(res => setProjects(res))
                    setInfo(false);
                })
        }
    }


    return (
        <div className='listProject'>
            <div className='title'>
                <h1>PROJECT</h1>
                <h4>LIST</h4>
            </div>
            {projects.map((project, index) => <Project key={index} data={project} setProjectDetails={setProjectDetails} setInfo={setInfo} sign={false} setCreateur={setCreateur} />)}
            {bullInfo &&
                <section className='info_project'>
                    <header>
                        <i className="fa-solid fa-minus" onClick={() => setInfo(false)}></i>
                        <button hidden>Update</button>
                        <button onClick={deleteProject}>Delete</button>
                    </header>
                    <section>
                        <h1>{projectDetails.titleProject === null ? 'Project' : projectDetails.titleProject}</h1>
                        <p>
                            {projectDetails.descriptionProject === null ? '...' : projectDetails.descriptionProject}
                        </p>
                        <p>Réaliser par : {createur === undefined ? '...' : (createur[0].firstName + ' ' + createur[0].firstName)} <br />Réf : {projectDetails.idProject === null ? '...' : projectDetails.idProject}</p>
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



