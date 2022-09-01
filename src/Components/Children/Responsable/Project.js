import '../../../Style/Home/Project.css';

const Project = (props) => 
{

    const handelClick_1 = () =>{
        props.setPassage('2')
        // fetch('http://localhost:8080/project/list/all')
        //     .then(res => res.json())
        //     .then(res => setProjects(res))
    }


    return (

        <div className="project">
            <div className='projectDecoration item1'></div>
            <div className='projectDecoration item2'></div>
            <div className='faceProject'>
                <p>{props.data.titleProject}</p>
                <div className='line'></div>
            </div>
            <div className='backProject'>
                <p>
                    {props.data.descriptionProject}
                </p>
                <div className='action'>
                    
                    <div className='etatAvencement'>
                        <label>25 / 100</label>
                        <div><span></span></div>
                    </div>
                    <div className={props.sign ? 'detail':'detail hov'}>
                        <button onClick={() => {props.setInfo(true);props.setProjectDetails(props.data)}} className={props.sign ? null : 'list'}>Détail</button>
                        {props.sign && <button onClick={handelClick_1}>Consulter</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;