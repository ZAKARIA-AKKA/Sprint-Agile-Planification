
import '../../../Style/Home/StateProject.css';
// import close from '../../../Asset/Static-Img/cross-mark.png'
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import Project from './Project';
import { useState } from "react";
import SprintLine from './SprintLine';
import SprintOrTicket from './SprintOrTicket';


const StateProject = (props) => {
    const [passage, setPassage] = useState('1');
    const [form, setForm] = useState('chart'); // pour faire le choix d'affiche les sprint sous la forme list ou bien chart
    const [bullInfo, setInfo] = useState(false);
    let dateDepart = '2/14/2022';
    let dateFin = '5/9/2023';
    let dateSprint = '4/9/2022';
    let dateSprint2 = '9/9/2022';

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
                    <Project setInfo={setInfo} setPassage={setPassage} sign={true} />
                    <Project setInfo={setInfo} setPassage={setPassage} sign={true} />

                    {bullInfo &&
                        <section className='info_project'>
                            <header>
                                {/* <img src={close} alt="Close icon" onClick={() => setInfo(false)}></img> */}
                                <i className="fa-solid fa-minus" onClick={() => setInfo(false)}></i>
                            </header>
                            <section>
                                <h1>Project - 1</h1>
                                <p>
                                    Project - 1 est une itération de développement de la méthode Scrum. Il dure généralement entre deux et quatre semaines.
                                    Project - 1 est une itération de développement de la méthode Scrum. Il dure généralement entre deux et quatre semaines.
                                    Il dure généralement entre deux et quatre semaines.
                                </p>
                                <p>Réaliser par : AKKA ZAKARIA <br />Réf : 325417548</p>
                            </section>
                            <footer>
                                <div className='etat'>Etat : Complete</div>
                                <div className='date'>
                                    Date de Début : 06/08/2022 - 09 : 22<br />Date de Fin : 06/08/2022 - 16 : 15
                                </div>
                            </footer>
                        </section>
                    }
                </div>
                :
                <div className='report_1'>
                    <div className='title'>
                        <img src={closeIcon} alt='closeIcon' className='closeIcon' onClick={() => setPassage(passage === '3' ? '2' : '1')} />
                        <h4>{passage === '3' ? 'TICKETS' : 'SPRINTS'}</h4>
                        <h1>PROJECT</h1>
                    </div>
                    {passage === '2' ?
                        <section className='etatChangable'>
                        {form === 'chart' ?
                            <div className='chartPro'>
                                <abbr title='Départ'><div className='porte'></div></abbr>
                                <div className='deadLine'></div>
                                <abbr title='Fin'><div className='porte'></div></abbr>
                                <div className='ListAvencemant'>
                                    <div className='avn_Up'>
                                        <SprintLine taille={4 * 10} duree={moveSprint(dateDepart,dateFin,dateSprint)} setPassage={setPassage}/>
                                        <SprintLine taille={6 * 10} duree={moveSprint(dateDepart,dateFin,dateSprint2)} setPassage={setPassage}/>
                                    </div>
                                    <div className='avn_Down'></div>
                                </div>
                            </div>
                            :
                            <div className='chainePro'>
                                    <SprintOrTicket setPassage={setPassage} choix='sprint'/>
                                    <SprintOrTicket setPassage={setPassage} choix='sprint'/>
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
                        <SprintOrTicket choix='ticket'/>
                        <SprintOrTicket choix='ticket'/>
                    </section>
                }
                    
                </div>
            }
        </>
    )
}

export default StateProject;



