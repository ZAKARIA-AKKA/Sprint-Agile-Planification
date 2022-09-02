
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import { useState,useEffect } from "react";



const UpdateTicket = (props) => 
{
    const [idTask, setIDTask] = useState(props.dataTaskUpdate.idTask);
    const [titleTask, setTitleTask] = useState(props.operation === 'update' ? props.dataTaskUpdate.titleTask : '');
    const [descriptionTask, setDescTask] = useState(props.operation === 'update' ? props.dataTaskUpdate.descriptionTask : '');
    const [startDateTask, setDateDepartT] = useState(props.operation === 'update' ? props.dataTaskUpdate.startDateTask : new Date());
    const [endDateTask, setDateFinT] = useState(props.operation === 'update' ? props.dataTaskUpdate.endDateTask : new Date());
    const [statusTask, setStatusTask] = useState('PLANNED');
    const [sprintId, setSprintId] = useState(props.dataTaskUpdate.sprintId);
    const [ressource, setRessource] = useState('');
    const [ressourceList, setRessourceList] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/resource/list/all')
                .then(res => res.json())
                .then(res => setRessourceList(res))
    },[])

    const onUpdate = (e) => {

        e.preventDefault();
        let employeeId = ressourceList.filter((r) => (r.firstName + ' ' + r.lastName) === ressource)[0].id
        const task = {idTask,titleTask, descriptionTask,startDateTask,endDateTask,statusTask,sprintId,employeeId}
        fetch('http://localhost:8080/task/update', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task)})
        props.setPassage('4')
        props.setWork(true);
    }
    const onCreate = (e) => {

        e.preventDefault();
        let employeeId = ressourceList.filter((r) => (r.firstName + ' ' + r.lastName) === ressource)[0].id
        let sprintId = props.sprintId;
        const task = {titleTask, descriptionTask,startDateTask,endDateTask,statusTask,sprintId,employeeId}
        fetch('http://localhost:8080/task/new', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task)})
        props.setPassage('4')
        props.setWork(true);
    }

    return (
        <form className='formSprint3'>
            <div className='tickets'>
                <div className='createticket'>
                    <label>Ticket</label>
                    <div className='up'>
                        <input type="text" placeholder='Nom de Ticket' value={titleTask} onChange={(e) => setTitleTask(e.target.value)}/>
                        <input list="ressources" id="mesRessources" name="mesRessources" placeholder='Ressources' value={ressource} onChange={(e) => setRessource(e.target.value)}/>
                        <datalist id="ressources">
                            {ressourceList.map((r, index) => <option key={index} value={r.firstName + ' ' + r.lastName}></option>)}
                        </datalist>
                    </div>
                    <div className='down'>
                        <input type="text" placeholder='Description de Ticket' value={descriptionTask} onChange={(e) => setDescTask(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className='secondBox'>
                <button onClick={(e) => {props.operation === 'update' ? onUpdate(e) : onCreate(e)}}>{props.operation === 'update' ? 'MODIFIER' : 'AJOUTER'}</button>
                <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => props.setPassage('4')}/>
            </div>
        </form>
    )
}

export default UpdateTicket;