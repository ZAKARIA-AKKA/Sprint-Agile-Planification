
import '../../Style/Accueil/Accueil.css';
import logoTiter  from "../../Asset/Static-Img/Logo-Titre.png";
import logo  from "../../Asset/Static-Img/Logo.png";
// import { useState } from "react";


const Accueil = ({setPage,cnx}) => 
{ 
    
    return (
        <div className='accueil'>
            
            <section className='frant-1 frant'>
                <header>
                    <img src={logoTiter} alt='logo' />
                    <a href='#sec1'>APERCU</a>
                </header>
                <section className='contenu'>
                    <div className='application'>
                        <img src={logo} alt='logo' />
                        <div className='applicationName'>
                            Gestion des <a href='fvd'>Sprint agile</a> <span>&amp;Planification</span>
                        </div>
                    </div>
                </section>
                <div className='decoration'></div>
                <div className='decoration'></div>
                <button className='cnx' onClick={() => setPage(cnx ? 'home' : 'connection')}>CONNECTER</button>
            </section>

            <section id='sec1'className='frant-2 frant'></section>
            <section className='frant-3 frant'></section>
            <section className='frant-4 frant'></section>
            <section className='frant-5 frant'></section>
        </div>
    )
}

export default Accueil;