
import '../../Style/Home/Home.css';
import Menu from '../Children/Menu';
import { useState } from "react";
import ListProject from '../Children/Responsable/ListProject';
import CreateProject from '../Children/Responsable/CreateProject';
import StateProject from '../Children/Responsable/StateProject';


const Home = (props) => 
{
    const [operation,setOperation] = useState("list_p"); // pour passer d'une operation a l'autre list/creation/consultation.. de projet
    
    return (
        <div className='home'>
            <section className='navigation_section'> <Menu setPage={props.setPage} setOperation={setOperation}/> </section>
            <section className='work_section'>
                <header>
                    <div className='search_filter'>
                        <form className='search_form'>
                            <i className="fa-solid fa-circle-notch"></i>
                            <input type="search" placeholder='Search'/>
                        </form>
                        {/* <form className='filter_form'>
                            <i className="fa-solid fa-dice-d20"></i>
                            <select name="lang">
                                <option value="French">Filter</option>
                                <option value="French">Département</option>
                                <option value="English">Status</option>
                            </select>
                        </form> */}
                    </div>
                    <div className='notification_msg'>        
                        <i className="fa-solid fa-location-arrow"></i>
                        <i className="fa-solid fa-bell"></i>
                    </div>
                </header>
                <section className='change_section'> 
                    {operation === 'list_p' ? <ListProject/> : operation === 'create_p' ? <CreateProject/> : operation === 'consult_p' ? <StateProject/> : null} 
                </section>
                <footer></footer>
            </section>
        </div>
    )
}

export default Home;