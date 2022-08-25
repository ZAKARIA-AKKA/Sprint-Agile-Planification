
import '../../Style/Accueil/Accueil.css';
import logoTitre  from "../../Asset/Static-Img/Logo-Titre.png";
import logo  from "../../Asset/Static-Img/Logo.png";
import titre  from "../../Asset/Static-Img/Titre.png";
import svg  from "../../Asset/Static-Img/person_svg.png";
import cycleSprint  from "../../Asset/Static-Img/cycleSprint.png";
// import { useState } from "react";


const Accueil = ({setPage,cnx}) => 
{ 
    
    return (
        <div className='accueil'>
            
            <section id='sec1' className='frant-1 frant'>
                <header>
                    <img src={logoTitre} alt='logo' />
                    <a href='#sec2'>APERCU</a>
                </header>
                <section className='contenu'>
                    <div className='application'>
                        <img src={logo} alt='logo' />
                        <div className='applicationName'>
                            Gestion des <a href='#sec3'>Sprint agile</a> <span>&amp;Planification</span>
                        </div>
                    </div>
                </section>
                <div className='decoration'></div>
                <div className='decoration'></div>
                <button className='cnx' onClick={() => setPage(cnx ? 'home' : 'connection')}>CONNECTER</button>
            </section>

            <section id='sec2' className='frant-2 frant'>
                <div className='sap_info'>
                    <div className='titre'>
                        <h1>S A P : SPRINT AGILE ET PLANIFICATION .</h1>
                    </div>
                    <div className='desc'>
                        <p>L'application servira comme outil de gestion et aussi un moyen qui
                            offre un suivi rigoureux des Sprints Agile. En outre elle facilitera au
                            chef de projet de mieux gérer les ressources dédiée aux projets et les
                            différents taches associé.
                        </p>
                    </div>
                </div>
                <img src={titre} alt='logo' className='nomDeApp'/>
                <img src={svg} alt='svg' className='svg'/>
                <div className='decoration'></div>
            </section>

            <section id='sec3' className='frant-3 frant'>
                <div className='decoration'></div>
                <div className='decoration'></div>
                <div className='sprint_info'>
                    <div className='titre'>
                        <h1>SPRINT AGILE</h1>
                    </div>
                    <div className='desc'>
                        <p>Un sprint est une itération de développement de la méthode Scrum.
                            Il dure généralement entre deux et quatre semaines. Les fonctionnalités
                            réalisées durant le sprint sont sélectionnées dans le « product backlog »
                            renseigné par le « product owner »
                        </p>
                    </div>
                </div>
            </section>

            <section className='frant-4 frant'>
                <div className='titre'>LES ÉTAPES DE RÉALISATION D'UN SPRINT</div>
                <img src={cycleSprint} alt='logo' />
            </section>

            <section className='frant-5 frant'></section>
            <a href='#sec1'><i className="fa-solid fa-circle-chevron-up" id="goUp"></i></a>
        </div>
    )
}

export default Accueil;