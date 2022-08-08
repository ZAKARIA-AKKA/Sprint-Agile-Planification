
import '../../Style/Connection/Connection.css';
import ForgetPass from '../Children/ForgetPass';
import SignIn from '../Children/SignIn';
import { useState } from "react";


const Connection = (props) => 
{ 
    const [forgetPass,setForgetPass] = useState(false)
    return (
        <div className='connection'>
            {forgetPass ? <ForgetPass setForgetPass={setForgetPass} setPage={props.setPage}/> : <SignIn setForgetPass={setForgetPass} setPage={props.setPage}/>}

        </div>
    )
}

export default Connection;