
import '../../Style/Home/Home.css';
import Menu from '../Children/Menu';
import { useState,useEffect } from "react";
import ListProject from '../Children/Responsable/ListProject';
import CreateProject from '../Children/Responsable/CreateProject';
import StateProject from '../Children/Responsable/StateProject';
import CreateSprint from '../Children/Responsable/CreateSprint';
import Profil from '../Children/Responsable/Profil';


const Home = (props) => 
{   
    const [search, setSearch] = useState('');
    const [proList, setProjects] = useState([]); // pour récuperer la liste des projets
    const [operation,setOperation] = useState("list_p"); // pour passer d'une operation a l'autre list/creation/consultation.. de projet
    const [showSearch,setShowSearch] = useState(true); // pour afficher la boite de recherche
    const [showNotification,setShowNotification] = useState(false); // pour afficher les notifications
    const [showContact,setShowContact] = useState(false); // pour afficher la boite de contact

    useEffect(() => {

            if(search !== '')
            {
                fetch('http://localhost:8080/project/search/' + search)
                .then(res => res.json())
                .then(res => setProjects(res))
            }
            else{

                fetch('http://localhost:8080/project/list/all')
                .then(res => res.json())
                .then(res => setProjects(res))
            }
        
    },[search])

    return (
        <div className='home'>
            <section className='navigation_section'> <Menu setPage={props.setPage} setOperation={setOperation} setConnect={props.setConnect} setShowSearch={setShowSearch}/> </section>
            <section className='work_section'>
                <header>
                    <div className='search_filter'>
                        {showSearch &&
                        <form className='search_form'>
                            <i className="fa-solid fa-circle-notch"></i>
                            <input type="search" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
                        </form>
                        }
                    </div>
                    <div className='notification_msg'>        
                        <i className="fa-solid fa-location-arrow" onClick={() => setShowContact(!showContact)}></i>
                        <i className="fa-solid fa-bell" onClick={() => setShowNotification(!showNotification)}><div></div></i>
                    </div>
                </header>
                <section className='change_section'> 
                    {operation === 'list_p' ? <ListProject proList={proList}/> : operation === 'create_p'
                                            ? <CreateProject owner={props.owner} /> : operation === 'sprint_p' 
                                            ? <CreateSprint owner={props.owner} /> : operation === 'consult_p'
                                            ? <StateProject setShowSearch={setShowSearch} proList={proList}/> : operation === 'profil'
                                            ? <Profil  owner={props.owner} setOwner={props.setOwner}/> : null} 
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