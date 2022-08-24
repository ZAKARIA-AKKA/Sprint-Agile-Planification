import '../../../Style/Home/Profil.css';
import avatar from "../../../Asset/Static-Img/user.png";
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import { useState } from "react";
import InputComposante from './InputComposante';

const Profil = (props) => 
{
    const [updateInfo,setUpdateInfo] = useState(false);
    const readProfilIgm = (e) => 
    {
        let photo = document.getElementById('photo');
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.addEventListener('load',() => {
            let src = reader.result;
            photo.src = src
            console.log(src)
        })
    }
    

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
                        <img src={avatar} alt='user'/>
                    </div>
                </section>
                :
                <section className='updateUserInfo'>
                    <header>
                        <label htmlFor='choseImage'><img src={avatar} alt='user' id='photo'/></label>     
                        <div className='nameAvatar'>ZAKARIA AKKA</div> 
                    </header>
                    <form className='changeInfo' encType="multipart/form-data">
                        <div className='box'>
                            <InputComposante type='text' nom='Réf' valeur=''/>
                            <InputComposante type='text' nom='Nom-Prenom' valeur=''/>
                        </div>
                         <div className='box'>
                            <InputComposante type='text' nom='Tél' valeur=''/>
                            <InputComposante type='text' nom='Adresse' valeur=''/>
                        </div>
                        <div className='box'>
                            <InputComposante type='text' nom='E-mail' valeur=''/>
                            <InputComposante type='password' nom='Mot de passe' valeur=''/>
                        </div>
                        <div className='box'>
                            <textarea></textarea>
                            <button>MODIFIER PROFIL</button>
                            <input type='file' id='choseImage' hidden onChange={readProfilIgm}/>
                        </div>
                    </form>
                    <img src={closeIcon} alt='closeIcon' className='closeIcon' onClick={() => setUpdateInfo(false)}/>
                </section>
            }
        </div>
    )
}

export default Profil;