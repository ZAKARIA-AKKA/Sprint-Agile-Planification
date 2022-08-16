
import '../../../Style/Home/ListProject.css';
import close from '../../../Asset/Static-Img/cross-mark.png'
import { useState } from "react";
import Project from './Project';


const ListProject = (props) => 
{
    
    const [bullInfo,setInfo] = useState(false);

    return (
        <div className='listProject'>
            <div className='title'>
                <h1>PROJECT</h1>
                <h4>LIST</h4>
            </div>
            <Project setInfo={setInfo} sign={false}/><Project setInfo={setInfo} sign={false}/>
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
    )
}

export default ListProject;


                
