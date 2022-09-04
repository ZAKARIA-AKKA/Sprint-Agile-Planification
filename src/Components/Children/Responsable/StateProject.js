
import '../../../Style/Home/StateProject.css';
// import close from '../../../Asset/Static-Img/cross-mark.png'
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import Project from './Project';
import { useState,useEffect } from "react";
import SprintLine from './SprintLine';
import SprintOrTicket from './SprintOrTicket';


const StateProject = (props) => {
    const [passage, setPassage] = useState('1');
    const [form, setForm] = useState('chart'); // pour faire le choix d'affiche les sprint sous la forme list ou bien chart
    const [bullInfo, setInfo] = useState(false);
    const [projects, setProjects] = useState([]); // pour récuperer la liste des projets
    const [sprints, setSprints] = useState([]); // pour récuperer la liste des projets 
    const [tasks, setTasks] = useState([]); // pour récuperer la liste des projets 
    const [projectDetails, setProjectDetails] = useState(); // pour récuperer les details d'un seule projet et affiché dans la section detail
    const [createur,setCreateur] = useState()
    const [pro,setPro] = useState()

    useEffect(() => {
        
        fetch('http://localhost:8080/project/list/all')
            .then(res => res.json())
            .then(res => setProjects(res))

    }, [])

    useEffect(() => {
        
        setProjects(props.proList)

   },[props.proList])


    function calculeDateProject(dep,fin) 
    {
        let dateDépart = new Date(dep)
        let dateFin = new Date(fin)
        let mois = 0,jour = 30,annee = 0,addition = 0;
        let res = 0;
        if (dateDépart.getFullYear() === dateFin.getFullYear()) 
        {
            mois = (dateFin.getMonth() + 1) - (dateDépart.getMonth() + 1);
            if((dateFin.getMonth() + 1) >= 8 && (dateDépart.getMonth() + 1) <= 7)
            {
                addition = 2;
            }
            if(((dateFin.getMonth() + 1) === 7 && (dateDépart.getMonth() + 1) <= 7) || ((dateFin.getMonth() + 1) === 8 && (dateDépart.getMonth() + 1) >= 8))
            {
                addition = 1;
            }
            res = (mois * jour) + addition;
        }
        else 
        {
            annee = dateFin.getFullYear() - dateDépart.getFullYear();
            if((dateFin.getMonth() + 1) === (dateDépart.getMonth() + 1))
            {
                res =  annee * 365;
            }
            if((dateFin.getMonth() + 1) > (dateDépart.getMonth() + 1))
            {
                mois = (dateFin.getMonth() + 1) - (dateDépart.getMonth() + 1);
                res = (annee * 365) + (mois * 30);
            }
            if((dateFin.getMonth() + 1) < (dateDépart.getMonth() + 1))
            {
                mois = (dateDépart.getMonth() + 1) - (dateFin.getMonth() + 1);
                res = (annee * 365) - (mois * 30);
            }
        }
        return Math.abs(res);
    }
    function calculeDateSprint(dep,dateCreationSprint)
    {
        let dateDépart = new Date(dep);
        let dateSprint = new Date(dateCreationSprint);
        let mois = 0,jour = 30,annee = 0,addition = 0;
        let res = 0;
        if (dateDépart.getFullYear() === dateSprint.getFullYear()) 
        {
            mois = (dateSprint.getMonth() + 1) - (dateDépart.getMonth() + 1);
            if((dateSprint.getMonth() + 1) >= 8 && (dateDépart.getMonth() + 1) <= 7)
            {
                addition = 2;
            }
            if(((dateSprint.getMonth() + 1) === 7 && (dateDépart.getMonth() + 1) <= 7) || ((dateSprint.getMonth() + 1) === 8 && (dateDépart.getMonth() + 1) >= 8))
            {
                addition = 1;
            }
            res = (mois * jour) + addition;
        }
        else 
        {
            annee = dateSprint.getFullYear() - dateDépart.getFullYear();
            if((dateSprint.getMonth() + 1) === (dateDépart.getMonth() + 1))
            {
                res =  annee * 365;
            }
            if((dateSprint.getMonth() + 1) > (dateDépart.getMonth() + 1))
            {
                mois = (dateSprint.getMonth() + 1) - (dateDépart.getMonth() + 1);
                res = (annee * 365) + (mois * 30);
            }
            if((dateSprint.getMonth() + 1) < (dateDépart.getMonth() + 1))
            {
                mois = (dateDépart.getMonth() + 1) - (dateSprint.getMonth() + 1);
                res = (annee * 365) - (mois * 30);
            }
        }
        return Math.abs(res);
    }
    function moveSprint(dep,fin,dateCreationSprint)
    {
        let durreProject = calculeDateProject(dep,fin);
        let dureeSprint = calculeDateSprint(dep,dateCreationSprint);
        return Math.round((dureeSprint * 100) / durreProject)
    }
    return (
        <>
            {passage === '1' ?
                <div className='stateProject'>
                    <div className='title'>
                        <h1>PROJECT</h1>
                        <h4>STATE</h4>
                    </div>
                    {projects.map((project, index) => <Project key={index} data={project} setProjectDetails={setProjectDetails} setInfo={setInfo} setPassage={setPassage} sign={true} setSprints={setSprints} setCreateur={setCreateur} setPro={setPro} setShowSearch={props.setShowSearch}/>)}
                    {bullInfo &&
                        <section className='info_project'>
                            <header>
                                {/* <img src={close} alt="Close icon" onClick={() => setInfo(false)}></img> */}
                                <i className="fa-solid fa-minus" onClick={() => setInfo(false)}></i>
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
                :
                <div className='report_1'>
                    <div className='title'>
                        <img src={closeIcon} alt='closeIcon' className='closeIcon' onClick={() => {setPassage(passage === '3' ? '2' : '1');props.setShowSearch(passage !== '3' && true)}} />
                        <h4>{passage === '3' ? 'TICKETS' : 'SPRINTS'}</h4>
                        <h1>PROJECT</h1>
                    </div>
                    {passage === '2' ?
                        <section className='etatChangable'>
                        {form === 'chart' ?
                            <div className='chartPro'>
                                <abbr title={pro.startDateProject}><div className='porte'></div></abbr>
                                <div className='deadLine'></div>
                                <abbr title={pro.endDateProject}><div className='porte'></div></abbr>
                                <div className='ListAvencemant'>
                                    <div className='avn_Up'>
                                    {sprints.map((sprint, index) => <SprintLine key={index} data={sprint} taille={sprint.numberOfTasks * 10} duree={moveSprint(pro.startDateProject,pro.endDateProject,sprint.startDateSprint)} setPassage={setPassage} setTasks={setTasks}/>)}
                                    </div>
                                    <div className='avn_Down'></div>
                                </div>
                            </div>
                            :
                            <div className='chainePro'>
                                {sprints.map((sprint, index) => <SprintOrTicket key={index} data={sprint} setPassage={setPassage} setTasks={setTasks} choix='sprint'/>)}
                            </div>
                        }
                        <div className='chart_etat'>
                            <div className='icon_div'>
                                <div className='wall' style={form === 'chart' ? { 'display': 'block' } : { 'display': 'none' }}></div>
                                <i className="fa-solid fa-chart-column" onClick={() => setForm('chart')} ></i>
                            </div>
                            <div className='icon_div'>
                                <div className='wall' style={form === 'chaine' ? { 'display': 'block' } : { 'display': 'none' }}></div>
                                <i className="fa-solid fa-diagram-project" onClick={() => setForm('chaine')}></i>
                            </div>
                        </div>
                    </section>
                    :
                    <section className='etatChangable'>
                        {tasks.map((task, index) => <SprintOrTicket key={index} data={task} choix='ticket'/>)}
                        {/* <SprintOrTicket choix='ticket'/>
                        <SprintOrTicket choix='ticket'/> */}
                    </section>
                }
                    
                </div>
            }
        </>
    )
}

export default StateProject;



