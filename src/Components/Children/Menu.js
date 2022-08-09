
import '../../Style/Home/Menu.css';
import logo  from "../../Asset/Static-Img/Logo.png";
import MenuButton from './MenuButton';
// import { useState } from "react";


const Menu = (props) => 
{ 
    const icons = ["house","compass-drafting","chart-pie","sliders","user"];
   
    return (
        <nav className='menu'>
            <header className='logo'> <img src={logo} alt='logo' /> </header>
            <div className='navigation'>
                {icons.map((item,index) => <MenuButton key={index} icon={item} cnx={props.cnx} setPage={props.setPage} setOperation={props.setOperation}/>)}
            </div>
            <footer className='logout'>
                <MenuButton icon="arrow-right-to-bracket" cnx={props.cnx} setPage={props.setPage} setOperation={props.setOperation}/>
            </footer>
        </nav>
    )
}

export default Menu;


