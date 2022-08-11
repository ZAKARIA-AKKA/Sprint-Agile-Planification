
import '../../../Style/Home/CreateProject.css';
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import { useEffect, useState } from "react";


const CreateProject = (props) => 
{
    const [passage,setPassage] = useState(false);
    const [ref,setRef] = useState('');


    useEffect(()=>{

        try { setRef('SAP-' + Math.round(Math.random() * 10000)) }
        catch { console.log('Il doit changer la référence de projet') }
        
    },[])
    return (
        <div className='createProject'>
            <div className='title'>
                <h1>CREATE</h1>
                <h4>PROJECT</h4>
            </div>
            <div className='content'>
                <section className='createSection'>
                    { !passage ? 
                        <form className='form1'>
                            <div>
                                <input type="text" placeholder='Nom du Projet'/>
                                <input type="text" value={ref}  disabled/>
                            </div>
                            <button onClick={(e) => {e.preventDefault();setPassage(true)}}> SUIVANT </button>
                        </form> 
                        :
                        <form className='form2'>
                            <div className='firstBox'>
                                <input type="text" placeholder='Description du Projet'/>
                                <div>
                                    <label>Date de Départ</label>
                                    <input type="date"/>
                                    <label>Date de Cloture</label>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className='secondBox'>
                                <input type="number" placeholder='Budget - E'/>
                                <button>CREER</button>
                                <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage(false)}/>
                            </div>
                        </form>
                    }
                    <footer>
                        <div style={passage ?{'background':'none'} : {'background':'#463F57'}}></div>
                        <div style={passage ?{'background':'#463F57'} : {'background':'none'}}></div>
                    </footer>
                </section>
            </div>
        </div>
    )
}

export default CreateProject;