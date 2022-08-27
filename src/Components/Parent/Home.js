
import '../../Style/Home/Home.css';
import Menu from '../Children/Menu';
import { useState } from "react";
import ListProject from '../Children/Responsable/ListProject';
import CreateProject from '../Children/Responsable/CreateProject';
import StateProject from '../Children/Responsable/StateProject';
import CreateSprint from '../Children/Responsable/CreateSprint';
import Profil from '../Children/Responsable/Profil';


const Home = (props) => 
{
    const [operation,setOperation] = useState("list_p"); // pour passer d'une operation a l'autre list/creation/consultation.. de projet
    const [showSearch,setShowSearch] = useState(true); // pour afficher la boite de recherche
    const [showNotification,setShowNotification] = useState(false); // pour afficher les notifications
    const [showContact,setShowContact] = useState(false); // pour afficher la boite de contact
    return (
        <div className='home'>
            <section className='navigation_section'> <Menu setPage={props.setPage} setOperation={setOperation} setConnect={props.setConnect} setShowSearch={setShowSearch}/> </section>
            <section className='work_section'>
                <header>
                    <div className='search_filter'>
                        {showSearch &&
                        <form className='search_form'>
                            <i className="fa-solid fa-circle-notch"></i>
                            <input type="search" placeholder='Search'/>
                        </form>
                        }
                    </div>
                    <div className='notification_msg'>        
                        <i className="fa-solid fa-location-arrow" onClick={() => setShowContact(!showContact)}></i>
                        <i className="fa-solid fa-bell" onClick={() => setShowNotification(!showNotification)}><div></div></i>
                    </div>
                </header>
                <section className='change_section'> 
                    {operation === 'list_p' ? <ListProject/> : operation === 'create_p'
                                            ? <CreateProject/> : operation === 'sprint_p' 
                                            ? <CreateSprint/> : operation === 'consult_p'
                                            ? <StateProject/> : operation === 'profil'
                                            ? <Profil/> : null} 
                    {showNotification &&
                        <div className='noti'>
                            <div className='notification'></div>
                            <div className='notification'></div>
                        </div>
                    }
                    {showContact &&
                        <div className='contact'>
                            
                        </div>
                    }
                </section>
                <footer>
                    {/* <form className='filter_form'>
                        <i className="fa-solid fa-dice-d20"></i>
                        <select name="lang">
                            <option value="French">Filter</option>
                            <option value="French">Département</option>
                            <option value="English">Status</option>
                        </select>
                    </form> */}
                </footer>
            </section>
        </div>
    )
}

export default Home;