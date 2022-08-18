
import '../../../Style/Home/StateProject.css';
import close from '../../../Asset/Static-Img/cross-mark.png'
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import Project from './Project';
import { useState } from "react";
import SprintLine from './SprintLine';


const StateProject = (props) => 
{
    const [passage,setPassage] = useState('1');
    const [form,setForm] = useState('chart');
    const [bullInfo,setInfo] = useState(false);
    let date1 = '1/12/2022';
    let date2 = '1/9/2022';
    function calculePositionSprint(nomberSprint,dep,fin)
    {
        let dateDépart = new Date(dep)
        let dateFin = new Date(fin)
        if(dateDépart.getFullYear() === dateFin.getFullYear())
        {
            console.log(dateDépart.getMonth())
        }
        else
        {
            console.log('mal')
        }
    }
    calculePositionSprint(3,date1,date2)
    return (
        <>
        {passage === '1' ?
            <div className='stateProject'>
                <div className='title'>
                    <h1>PROJECT</h1>
                    <h4>STATE</h4>
                </div>
                <Project setInfo={setInfo} setPassage={setPassage} sign={true}/>  
                { bullInfo && 
                <section className='info_project'>
                    <header><img src={close} alt="Close icon" onClick={() => setInfo(false)}></img></header>
                    <section>
                        <h1>Project - 1</h1>
                        <p>
                            Project - 1 est une itération de développement de la méthode Scrum. Il dure généralement entre deux et quatre semaines.
                            Project - 1 est une itération de développement de la méthode Scrum. Il dure généralement entre deux et quatre semaines.
                            Il dure généralement entre deux et quatre semaines.
                        </p>
                        <p>Réaliser par : AKKA ZAKARIA <br/>Réf : 325417548</p>
                    </section>
                    <footer>
                        <div className='etat'>Etat : Complete</div>
                        <div className='date'>
                            Date de Début : 06/08/2022 - 09 : 22<br/>Date de Fin : 06/08/2022 - 16 : 15
                        </div>
                    </footer>
                </section>
                }
            </div>
        : 
        <div className='report_1'>
            <div className='title'>
                <img src={closeIcon} alt='closeIcon' className='closeIcon' onClick={() => setPassage(false)}/>
                <h4>SPRINTS</h4>
                <h1>PROJECT</h1>   
            </div>
            <section className='etatChangable'>
                { form === 'chart' ? 
                    <div className='chartPro'>
                        <abbr title='Départ'><div className='porte'></div></abbr>
                        <div className='deadLine'></div>
                        <abbr title='Fin'><div className='porte'></div></abbr>
                        <div className='ListAvencemant'>
                            <div className='avn_Up'>
                                <SprintLine taille={9 * 10}/>
                            </div>
                            <div className='avn_Down'></div>
                        </div>
                    </div>
                    :
                    <div className='chainePro'>
                        
                    </div>
                }
                <div className='chart_etat'>
                    <div className='icon_div'>
                        <div className='wall' style={form === 'chart' ? {'display':'block'}:{'display':'none'} }></div>
                        <i className="fa-solid fa-chart-column" onClick={() => setForm('chart')} ></i>
                    </div>
                    <div className='icon_div'>
                        <div className='wall' style={form === 'chaine' ? {'display':'block'}:{'display':'none'} }></div>
                        <i className="fa-solid fa-diagram-project" onClick={() => setForm('chaine')}></i>
                    </div> 
                </div>
            </section>
        </div>
        }
        </>
    )
}

export default StateProject;


                
