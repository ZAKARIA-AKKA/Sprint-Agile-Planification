
import '../../../Style/Home/CreateProject.css';
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import { useEffect, useState } from "react";


const CreateProject = (props) => {
    
    const [passage, setPassage] = useState(false);
    const [ref, setRef] = useState('');
    const [titleProject, setNomProjet] = useState('');
    const [descriptionProject, setDescProjet] = useState('');
    const [budgetProject, setBudgetProjet] = useState('');
    const [startDateProject, setDateDepart] = useState('');
    const [endDateProject, setDateFin] = useState('');
    const [statusProject, setStatus] = useState('PLANNED');

    const handelClick_1 = (e) => {
        e.preventDefault(); 
        if(titleProject !== '')
        {
            setPassage(true)
        }
    }
    const verify = (e) => {

        e.preventDefault();
        if (startDateProject !== '' && endDateProject !== '') {
            let creatorId = props.owner.id;
            const project = { titleProject, descriptionProject, budgetProject, startDateProject, endDateProject, statusProject,creatorId}
            fetch('http://localhost:8080/project/new', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(project) })
            setPassage(false);
            setNomProjet('');
            setDescProjet('');
            setBudgetProjet('');
            setDateDepart('');
            setDateFin('');
        }
    };


    useEffect(() => {

        try { setRef('SAP-' + Math.round(Math.random() * 10000)) }
        catch { console.log('Il doit changer la référence de projet') }

    }, [])
    return (
        <div className='createProject'>
            <div className='title'>
                <h1>CREATE</h1>
                <h4>PROJECT</h4>
            </div>
            <div className='content'>
                <section className='createSection'>
                    {!passage ?
                        <form className='form1'>
                            <div>
                                <input type="text" placeholder='Nom du Projet' value={titleProject} onChange={(e) => setNomProjet(e.target.value)} />
                                <input type="text" value={ref} disabled />
                            </div>
                            <button onClick={handelClick_1}> SUIVANT </button>
                        </form>
                        :
                        <form className='form2'>
                            <div className='firstBox'>
                                <input type="text" placeholder='Description du Projet' value={descriptionProject} onChange={(e) => setDescProjet(e.target.value)} />
                                <div>
                                    <label>Date de Départ</label>
                                    <input type="date" value={startDateProject} onChange={(e) => setDateDepart(e.target.value)} />
                                    <label>Date de Cloture</label>
                                    <input type="date" value={endDateProject} onChange={(e) => setDateFin(e.target.value)} />
                                </div>
                            </div>
                            <div className='secondBox'>
                                <input type="number" placeholder='Budget - E' value={budgetProject} onChange={(e) => setBudgetProjet(e.target.value)} />
                                <button onClick={verify}>CREER PROJET</button>
                                <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage(false)} />
                            </div>
                        </form>
                    }
                    <footer>
                        <div style={passage ? { 'background': 'none' } : { 'background': '#463F57' }}></div>
                        <div style={passage ? { 'background': '#463F57' } : { 'background': 'none' }}></div>
                    </footer>
                </section>
            </div>
        </div>
    )
}

export default CreateProject;