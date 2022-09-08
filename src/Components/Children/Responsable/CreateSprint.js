
import '../../../Style/Home/CreateSprint.css';
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import add from '../../../Asset/Static-Img/plus.png'
import { useEffect, useState } from "react";
import Ticket from './Ticket';
import UpdateTicket from './UpdateTicket';


const CreateSprint = (props) => {
    const [passage, setPassage] = useState("1");
    const [operation, setOperation] = useState("..."); // pour déterminer le genre de l'operation effectué sur le ticket (ajout ou modification ) 
    const [projectsList, setProjectList] = useState([]);
    //========================================================
    const [ref, setRef] = useState('');// Pour générer un id ou une référence aléatoirement
    const [sprintId, setSprintId] = useState('');
    const [titleSprint, setTitle] = useState('');
    const [descriptionSprint, setDescSprint] = useState('');
    const [startDateSprint, setDateDepart] = useState('');
    const [endDateSprint, setDateFin] = useState('');
    const [statusSprint, setStatus] = useState('PLANNED');
    const [projectTitle, setProjectTitle] = useState('');

    const [numberTicket, setNumberTicket] = useState('');

    let [incTask, setVarIncr] = useState(0);
    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescTask] = useState('');
    const [startDateTask, setDateDepartT] = useState();
    const [endDateTask, setDateFinT] = useState();
    const [statusTask, setStatusTask] = useState('PLANNED');
    const [ressource, setRessource] = useState('');
    const [ressourceList, setRessourceList] = useState([]);
    const [TaskList, setTaskList] = useState([]);

    const [dataTaskUpdate, setDataTaskUpdate] = useState('');
    const [work, setWork] = useState(false);
    //========================================================

    useEffect(() => {

        try { setRef('N° ' + Math.round(Math.random() * 10000)) }
        catch { console.log('Il doit changer la référence de projet') }

    }, [])
    // useEffect((sprintId) => {
    //             console.log('done')
    //             // if(work)
    //             // {
    //             //     fetch('http://localhost:8080/tasks/' + sprintId)
    //             //         .then(res => res.json())
    //             //         .then(res => setTaskList(res))
    //             //         console.log('1')
    //             //         // setWork(false);
    //             // }
    //             // else{
    //                 // fetch('http://localhost:8080/task/list/all')
    //                 //     .then(res => res.json())
    //                 //     .then(res => setTaskList(res))
    //                 // console.log('2')
    //                 // setWork(false);
    //             // }
    // },[work])

    const handelClick_1 = (e) => {

        e.preventDefault();
        if (titleSprint !== '') {
            setPassage("2");
            fetch('http://localhost:8080/project/list/all')
                .then(res => res.json())
                .then(res => setProjectList(res))

        }
    }
    const handelClick_2 = (e) => {

        e.preventDefault();
        if (startDateSprint !== '' && endDateSprint !== '' && numberTicket !== '' && projectTitle !== '') {
            setPassage("3")
            let projectId = projectsList.filter((p) => p.titleProject === projectTitle)[0].idProject
            const sprint = { titleSprint, descriptionSprint, startDateSprint, endDateSprint, statusSprint, projectId }
            fetch('http://localhost:8080/sprint/new', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(sprint) })

            fetch('http://localhost:8080/resource/list/all')
                .then(res => res.json())
                .then(res => setRessourceList(res))
        }
    }
    const handelClick_3 = (e) => {

        e.preventDefault();
        fetch('http://localhost:8080/sprint/tasks/' + sprintId)
            .then(res => res.json())
            .then(res => setTaskList(res))
        setPassage("4")

    }
    const handelClick_4 = (e) => {

        setPassage("1")
        setWork(false);
        setSprintId('')
        setTitle('');
        setDescSprint('');
    }
    const change = (e) => {

        if (numberTicket > incTask) {
            if (titleTask !== '' && ressource !== '') {

                if (e.target.checked) {
                    setVarIncr(++incTask);
                    fetch('http://localhost:8080/sprint/get/last')
                        .then(res => res.json())
                        .then(res => {
                            console.log('Sprint id ===> ',res.idSprint)
                            setSprintId(res.idSprint)
                            let sprintId = res.idSprint
                            let employeeId = ressourceList.filter((r) => (r.firstName + ' ' + r.lastName) === ressource)[0].id
                            const task = { titleTask, descriptionTask, startDateTask, endDateTask, statusTask, sprintId, employeeId }
                            fetch('http://localhost:8080/task/new', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task) })

                        })

                    setTimeout(() => {
                        e.target.checked = false;
                    }, 600);
                    if (numberTicket == incTask) {
                        e.target.disabled = true;
                        document.querySelector('#btn3').hidden = false;
                        setVarIncr(0);
                    }
                }

            }
        }

    }
    return (
        <div className='createSprint'>
            {passage === '1' || passage === '2' ?

                <div className='title'>
                    <h1>CREATE</h1>
                    <h4>SPRINT</h4>
                </div>
                :
                <div className='titleSprint'>
                    <h1>SPRINT</h1>
                    <h4>{ref}</h4>
                </div>
            }
            <div className={(passage === '1' || passage === '2') ? 'content ' : 'tasks'}>
                <section className='createSection'>
                    {passage === '1' ?
                        <form className='formSprint1'>
                            <div>
                                <input type="text" value={ref} onChange={(e) => setRef(e.target.value)} disabled />
                                <input type="text" placeholder='Nom de Sprint' value={titleSprint} onChange={(e) => setTitle(e.target.value)} />
                                <input type="text" placeholder='Description de Sprint' value={descriptionSprint} onChange={(e) => setDescSprint(e.target.value)} />
                            </div>
                            <button onClick={handelClick_1}> SUIVANT </button>
                        </form>
                        : passage === '2' ?
                            <form className='formSprint2'>
                                <div className='firstBox'>
                                    <div>
                                        <label>Date de Départ</label>
                                        <input type="date" value={startDateSprint} onChange={(e) => { setDateDepart(e.target.value); setDateDepartT(e.target.value) }} />
                                        <label>Date de Cloture</label>
                                        <input type="date" value={endDateSprint} onChange={(e) => { setDateFin(e.target.value); setDateFinT(e.target.value) }} />
                                        <input list="project" id="mesProject" name="mesProject" placeholder='List Project' value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
                                        <datalist id="project" >
                                            {projectsList.map((p) => <option key={p.idProject} value={p.titleProject}></option>)}
                                        </datalist>
                                    </div>
                                </div>
                                <div className='secondBox'>
                                    <input type="number" placeholder='Nomber de Ticket' min={1} value={numberTicket} onChange={(e) => setNumberTicket(e.target.value)} />
                                    <button onClick={handelClick_2}>SUIVANT</button>
                                    <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage('1')} />
                                </div>
                            </form>
                            : passage === '3' ?
                                <form className='formSprint3'>
                                    <div className='tickets' >
                                        <div className='createticket'>
                                            <label>Tickets {incTask} / {numberTicket === '' ? '?' : numberTicket}</label>
                                            <div className='up'>
                                                <input type="text" placeholder='Nom de Ticket' value={titleTask} onChange={(e) => setTitleTask(e.target.value)} />
                                                <input list="ressources" id="mesRessources" name="mesRessources" placeholder='Ressources' value={ressource} onChange={(e) => setRessource(e.target.value)} />
                                                <datalist id="ressources">
                                                    {ressourceList.map((r, index) => <option key={index} value={r.firstName + ' ' + r.lastName}></option>)}
                                                </datalist>
                                            </div>
                                            <div className='down'>
                                                <input type="text" placeholder='Description de Ticket' value={descriptionTask} onChange={(e) => setDescTask(e.target.value)} />
                                                <input type="checkBox" placeholder='Description de Sprint' onChange={change} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='secondBox'>
                                        <button onClick={handelClick_3} id='btn3' >SUIVANT</button>
                                        <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage('2')} />
                                    </div>
                                </form>
                                : passage === '4' ?
                                    <form className='formSprint4'>
                                        <div className='tickets'>
                                            {TaskList.map((task, index) => <Ticket key={index} task={task} setPassage={setPassage} setOperation={setOperation} setDataTaskUpdate={setDataTaskUpdate} setTaskList={setTaskList} />)}
                                        </div>
                                        <div className='secondBox'>
                                            <button onClick={handelClick_4}>démarrer le sprint</button>
                                            {/* <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage('3')} /> */}
                                            <img src={add} alt='Ajouter Un Ticket' className='addIcon' onClick={() => { setPassage('5'); setOperation('ajouter') }} />
                                        </div>


                                    </form>
                                    : passage === '5' ?
                                        <UpdateTicket setPassage={setPassage} operation={operation} dataTaskUpdate={dataTaskUpdate} setTaskList={setTaskList} sprintId={sprintId} />
                                        : null
                    }
                    <footer>
                        {passage !== '5' && <>
                            <div style={passage === '1' ? { 'background': '#463F57' } : { 'background': 'none' }}></div>
                            <div style={passage === '2' ? { 'background': '#463F57' } : { 'background': 'none' }}></div>
                            <div style={passage === '3' ? { 'background': '#463F57' } : { 'background': 'none' }}></div>
                            <div style={passage === '4' ? { 'background': '#463F57' } : { 'background': 'none' }}></div>
                        </>}
                    </footer>
                </section>
            </div>
        </div >
    )
}

export default CreateSprint;