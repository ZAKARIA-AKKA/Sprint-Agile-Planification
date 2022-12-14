
import '../../Style/Home/Menu.css';
import logo  from "../../Asset/Static-Img/Logo.png";
import MenuButton from './MenuButton';
// import { useState } from "react";


const Menu = (props) => 
{ 
    const icons = [{name : "house", title : "Liste"},{name : "compass-drafting", title : "Create Projet"},{name : "boxes-stacked", title : "Create Sprint"},{name : "chart-pie", title : "Report Projet"},{name : "user", title : "Profil"}];
    return (
        <nav className='menu'>
            <header className='logo'> <img src={logo} alt='logo' onClick={() => props.setPage('accueil')}/> </header>
            <div className='navigation'>
                {icons.map((item,index) => <MenuButton key={index} icon={item} cnx={props.cnx} setPage={props.setPage} setOperation={props.setOperation} setShowSearch={props.setShowSearch}/>)}
            </div>
            <footer className='logout'>
                <MenuButton icon={{name : "arrow-right-to-bracket", title : "LogOut"}} cnx={props.cnx} setPage={props.setPage} setOperation={props.setOperation} setConnect={props.setConnect}/>
            </footer>
        </nav>
    )
}

export default Menu;


