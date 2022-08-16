import '../../../Style/Home/Profil.css';
import avatar from "../../../Asset/Static-Img/user.png";
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import { useState } from "react";
import InputComposante from './InputComposante';

const Profil = (props) => 
{

    const [updateInfo,setUpdateInfo] = useState(true);

    return (

        <div className="profil">
            { !updateInfo ? 
                <section className='user'>
                    <div className='userInfo'>
                        <div className='info'>
                            <p>Je suis un Développeur Fullstack React/Php passionné par le frontend</p>
                            <button onClick={() => setUpdateInfo(true)}>MODIFIER</button>
                            <ul>
                            
                                <li>Réf : 325417548</li>

                                <li>Téléphone : +212 653530461</li>

                                <li>E-Mail : Akkazakaria.Stud@Gmail.Com</li>

                                <li>Adresse : N 1002 HEY ERRIAD BOUZNIKA</li>

                            </ul>

                        </div>
                    </div>

                    <div className='userphoto'>
                        <div className='userName'><span>AKKA</span><span>ZAKARIA</span></div>
                        <img src={avatar} alt='user' />
                    </div>
                </section>
                :
                <section className='updateUserInfo'>
                    <header>
                        <label htmlFor='choseImage'><img src={avatar} alt='user' /></label>
                        <input type='file' id='choseImage' hidden/>
                        <div className='nameAvatar'>ZAKARIA AKKA</div> 
                    </header>
                    <form className='changeInfo'>
                        <div className='box'>
                            <InputComposante type='text' nom='Réf' valeur=''/>
                            <InputComposante type='text' nom='Nom-Prenom' valeur=''/>
                        </div>
                    </form>
                    <img src={closeIcon} alt='closeIcon' className='closeIcon' onClick={() => setUpdateInfo(false)}/>
                </section>
            }
        </div>
    )
}

export default Profil;