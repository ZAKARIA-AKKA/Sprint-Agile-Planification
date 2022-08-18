import '../../../Style/Home/Project.css';

const Project = (props) => 
{
    return (

        <div className="project">
            <div className='projectDecoration item1'></div>
            <div className='projectDecoration item2'></div>
            <div className='faceProject'>
                <p>Project</p>
                <div className='line'></div>
            </div>
            <div className='backProject'>
                <p>
                    Project - 1 est une itération de développement de la méthode Scrum. 
                    Il dure généralement entre deux et quatre semaines.
                </p>
                <div className='action'>
                    
                    <div className='etatAvencement'>
                        <label>25 / 100</label>
                        <div><span></span></div>
                    </div>
                    <div className={props.sign ? 'detail':'detail hov'}>
                        <button onClick={() => props.setInfo(true)} className={props.sign ? null : 'list'}>Détail</button>
                        {props.sign && <button onClick={() => props.setPassage(true)}>Consulter</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;