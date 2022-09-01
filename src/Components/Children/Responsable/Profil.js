import '../../../Style/Home/Profil.css';
import avatar from "../../../Asset/Static-Img/user.png";
import closeIcon from '../../../Asset/Static-Img/arrow-left.png'
import { useState,useEffect } from "react";
import InputComposante from './InputComposante';

const Profil = (props) => 
{
    const [updateInfo,setUpdateInfo] = useState(false);
    const [id,setId] = useState(props.owner.id)
    const [fullName,setFullName] = useState(props.owner.firstName + ' ' + props.owner.lastName)
    const [firstName,setFirstName] = useState(props.owner.firstName)
    const [lastName,setLastName] = useState(props.owner.lastName)
    const [descriptionR,setdescriptionR] = useState(props.owner.descriptionR)
    const [phone,setPhone] = useState(props.owner.phone)
    const [adress,setAdress] = useState(props.owner.adress)
    const [email,setEmail] = useState(props.owner.email)
    const [password,setPassword] = useState(props.owner.password)

    useEffect(() => {

        fetch('http://localhost:8080/resource/show/' + id)
            .then(res => res.json())
            .then(res => props.setOwner(res))

    },[updateInfo])

    const handelClick_1 = (e) => {

        e.preventDefault();     
        setId(props.owner.id)
        setFullName(props.owner.firstName + ' ' + props.owner.lastName)
        setFirstName(props.owner.firstName)
        setLastName(props.owner.lastName)
        setdescriptionR(props.owner.descriptionR)
        setPhone(props.owner.phone)
        setAdress(props.owner.adress)
        setEmail(props.owner.email)
        setPassword(props.owner.password)
        setUpdateInfo(true)
    }

    const handelClick_2 = (e) => {
        e.preventDefault();
        const resource = {id,firstName,lastName,descriptionR,phone,adress,email,password}
        fetch('http://localhost:8080/responsible/update', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(resource) })
        setUpdateInfo(false)
    }

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
                            <p>{props.owner.descriptionR}</p>
                            <button onClick={handelClick_1}>MODIFIER</button>
                            <ul>
                            
                                <li>Réf : {props.owner.id}</li>

                                <li>Téléphone : {props.owner.phone}</li>

                                <li>E-Mail : {props.owner.email}</li>

                                <li>Adresse : {props.owner.adress}</li>

                            </ul>

                        </div>
                    </div>

                    <div className='userphoto'>
                        <div className='userName'><span>{props.owner.firstName}</span><span>{props.owner.lastName}</span></div>
                        <img src={avatar} alt='user'/>
                    </div>
                </section>
                :
                <section className='updateUserInfo'>
                    <header>
                        <label htmlFor='choseImage'><img src={avatar} alt='user' id='photo'/></label>     
                        <div className='nameAvatar'>{lastName} {firstName}</div> 
                    </header>
                    <form className='changeInfo' encType="multipart/form-data">
                        <div className='box'>
                            <InputComposante type='text' nom='Réf' valeur={id}/>
                            <InputComposante type='text' nom='Nom-Prenom' valeur={fullName}/>
                        </div>
                         <div className='box'>
                            <InputComposante type='text' nom='Tél' valeur={phone} operation={setPhone}/>
                            <InputComposante type='text' nom='Adresse' valeur={adress} operation={setAdress}/>
                        </div>
                        <div className='box'>
                            <InputComposante type='text' nom='E-mail' valeur={email} operation={setEmail}/>
                            <InputComposante type='password' nom='Mot de passe' valeur={password} operation={setPassword}/>
                        </div>
                        <div className='box'>
                            <textarea value={descriptionR} onChange={(e) => setdescriptionR(e.target.value)} />
                            <button onClick={handelClick_2}>MODIFIER PROFIL</button>
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