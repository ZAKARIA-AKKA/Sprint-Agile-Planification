
import '../../../Style/Home/ListProject.css';
import close from '../../../Asset/Static-Img/cross-mark.png'
import { useState } from "react";


const ListProject = (props) => 
{
    
    const [bullInfo,setInfo] = useState(false);
    const projects = [1,2,3,4,5,6]

    return (
        <div className='listProject'>
            <div className='title'>
                <h1>PROJECT</h1>
                <h4>LIST</h4>
            </div>
            {projects.map((index) => <div key={index} className='test' onClick={() => setInfo(true)}>project</div>)}
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
                    <p>Réaliser par : AKKA ZAKARIA <br/>Réf : 325417548
</p>
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


                
