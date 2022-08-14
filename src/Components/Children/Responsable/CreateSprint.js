
import '../../../Style/Home/CreateSprint.css';
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import { useEffect, useState } from "react";


const CreateSprint = (props) => 
{
    const [passage,setPassage] = useState("1");
    const [ref,setRef] = useState('');


    useEffect(()=>{

        try { setRef('N° ' + Math.round(Math.random() * 10000)) }
        catch { console.log('Il doit changer la référence de projet') }
        
    },[])
    return (
        <div className='createSprint'>
            { passage === '1' || passage === '2' ?

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
                    { passage === '1' ? 
                        <form className='formSprint1'>
                            <div>
                                <input type="text" value={ref}  disabled/>
                                <input type="text" placeholder='Nom de Sprint'/>
                                <input type="text" placeholder='Description de Sprint'/>
                            </div>
                                <button onClick={(e) => {e.preventDefault();setPassage("2")}}> SUIVANT </button>            
                        </form> 
                        : passage === '2' ?
                        <form className='formSprint2'>
                            <div className='firstBox'>
                                <div>
                                    <label>Date de Départ</label>
                                    <input type="date"/>
                                    <label>Date de Cloture</label>
                                    <input type="date"/>
                                    <input list="project" id="mesProject" name="mesProject" placeholder='List Project'/>
                                    <datalist id="project">
                                        <option value='Project 1'></option>
                                        <option value='Project 2'></option>
                                    </datalist>
                                </div>
                            </div>
                            <div className='secondBox'>
                                <input type="number" placeholder='Nomber de Ticket'/>
                                <button onClick={(e) => { e.preventDefault();setPassage("3")}}>SUIVANT</button>
                                <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage('1')}/>
                            </div>
                        </form>
                        : passage === '3' ?
                        <form className='formSprint3'>
                            <div className='tickets'>
                                <div className='createticket'>
                                    <label>Tickets 1 / 3</label>
                                    <div className='up'>
                                        <input type="text" placeholder='Nom de Sprint'/>
                                        <input list="ressources" id="mesRessources" name="mesRessources" placeholder='Ressources'/>
                                        <datalist id="ressources">
                                            <option value='AKKA ZAKARIA'></option>
                                            <option value='HAKMI ABDELALIM'></option>
                                        </datalist>
                                    </div>
                                    <div className='down'>
                                        <input type="text" placeholder='Description de Sprint'/>
                                        <input type="checkBox" placeholder='Description de Sprint'/>
                                    </div>
                                </div>
                            </div>
                            <div className='secondBox'>
                                <button onClick={(e) => { e.preventDefault();setPassage("4")}}>SUIVANT</button>
                                <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage('2')}/>
                            </div>
                        </form>
                        : passage === '4' ?
                        <form className='formSprint4'>
                            <div className='tickets'>                               

                            </div>
                            <div className='secondBox'>
                                <button onClick={(e) => { e.preventDefault();setPassage("1")}}>SUIVANT</button>
                                <img src={closeIcon} alt='closeIcon' className='closeIcon CloseSection' onClick={() => setPassage('3')}/>
                            </div>
                        </form>
                        : null
                    }
                    <footer>
                        <div style={passage === '1' ? {'background':'#463F57'} : {'background':'none'}}></div>
                        <div style={passage === '2' ? {'background':'#463F57'} : {'background':'none'}}></div>
                        <div style={passage === '3' ? {'background':'#463F57'} : {'background':'none'}}></div>
                        <div style={passage === '4' ? {'background':'#463F57'} : {'background':'none'}}></div>
                    </footer>
                </section>
            </div>
        </div>
    )
}

export default CreateSprint;