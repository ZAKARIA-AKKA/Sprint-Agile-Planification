import '../../Style/Connection/ForgetPass.css';
import design  from "../../Asset/Static-Img/design2.png";
import logo  from "../../Asset/Static-Img/up.png";
import closeIcon from '../../Asset/Static-Img/arrow-left.png'
import { useState } from "react";
// import $ from "jquery";

const ForgetPass = (props) => 
{
    const [email,setEmail] = useState("");
    return (

        <div className='signin2'>
            <header className='signin_header'> <img src={logo} alt='logo' onClick={() => props.setPage("accueil")}/> </header>
            <section className='forgetPass_section'>
                <h2>Vous avez oublié votre mot de passe ? <br/>Le changement, ça a du bon !</h2>
                <h3>Entrez votre adresse e-mail ci-dessous .</h3>
                <form method='#' className='signIn_form2'>
                    <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button>Envoyer ma demande</button>
                </form>
            </section>
            <div className='signin_decoration first_decoration2'> <img src={closeIcon} alt='closeIcon' className='closeIcon' onClick={() => props.setForgetPass(false)}/> </div>
            <div className='signin_decoration second_decoration2'> <img src={design} alt='stuff'/></div>
            <div className='signin_fouter'>
                <select name="lang">
                    <option value="French">French</option>
                    <option value="English">English</option>
                </select>
            </div>
        </div>
    )
}
  
  export default ForgetPass;