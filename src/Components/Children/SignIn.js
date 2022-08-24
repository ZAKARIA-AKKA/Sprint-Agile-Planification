
import '../../Style/Connection/SignIn.css';
import design  from "../../Asset/Static-Img/design1.png";
import logo  from "../../Asset/Static-Img/up.png";
import eyeClose  from "../../Asset/Static-Img/eye-crossed.png";
import eye  from "../../Asset/Static-Img/eye.png";
import { useState } from "react";
// import $ from 'jquery'

function SignIn(props)
{
    const user = ["admin",'123'];
    const [showPass,setshowPass] = useState(false); // pour afficher/cacher le mot de passe
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    var err = document.getElementsByClassName('box_err');

    const virify = (e) => 
    {
        e.preventDefault();
        if(user[0] === email && user[1] === pass) {props.setPage("home");props.setConnect(true)}
        else err[0].setAttribute("style","visibility:visible");
        
    }
    
    return (
        
        <div className='signin'>
            <header className='signin_header'> <img src={logo} alt='logo' onClick={() => props.setPage("accueil")}/> </header>
            <section className='signin_cnx'>
                <h1>CONNEXION</h1>
                <form method='#' className='signIn_form'>
                    <input type="text" placeholder='E-mail' value={email} onChange={(e) => {setEmail(e.target.value);err[0].setAttribute("style","visibility:hidden");}}/>
                    <input type={showPass ? "text" : "password" } placeholder='Mot de passe' value={pass} onChange={(e) => {setPass(e.target.value);err[0].setAttribute("style","visibility:hidden");}}/>
                    <p onClick={() => props.setForgetPass(true)}>Mot de passe oublié ?</p>
                    <button onClick={virify}>SE CONNECTER</button>
                    <div className='box_err'>l'email ou le mot de passe est incorrect !</div>
                </form>

                <div className='boxOfEyes'>
                    {
                        showPass ? <img src={eye} alt='eyeOpen' className='eye' onClick={() => setshowPass(false)}/>
                                : <img src={eyeClose} alt='eyeClosed' className='eye' onClick={() => setshowPass(true)}/>
                    }
                </div>
            </section>
            <div className='signin_decoration first_decoration'> <img src={design} alt='stuff'/> </div>
            <div className='signin_decoration second_decoration'></div>
            <div className='signin_fouter'>
                <select name="lang">
                    <option value="French">French</option>
                    <option value="English">English</option>
                </select>
            </div>
        </div>
    )
}

export default SignIn;