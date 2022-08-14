
import {useEffect} from 'react';
import '../../Style/Home/MenuButton.css';


const MenuButton = (props) => {


    function handelClick()
    {
        let walls = document.querySelectorAll('.wall');
        if(props.icon.name !== 'arrow-right-to-bracket') { walls.forEach(elm => { elm.setAttribute('style','display:none') }); }
        switch(props.icon.name)
        {
            case 'house':
                props.setOperation("list_p");
                walls[0].setAttribute('style','display:block') 
            break;
            case 'compass-drafting':
                props.setOperation("create_p");
                walls[1].setAttribute('style','display:block')  
            break;
            case 'boxes-stacked':
                props.setOperation("sprint_p");
                walls[2].setAttribute('style','display:block') 
            break;
            case 'chart-pie':
                props.setOperation("consult_p");
                walls[3].setAttribute('style','display:block') 
            break;
            case 'user':
                props.setOperation("profil");
                walls[4].setAttribute('style','display:block') 
            break;
            default:
                props.setPage("connection");
                props.setOperation("list_p");
            break;
        }            
    }

    useEffect(() => {
        document.querySelector('.wall').setAttribute('style','display:block')
    },[]);

    return (
        <div className='icon_div'>
            <div className='wall'></div>
            <abbr title={props.icon.title}><i className={"fa-solid fa-" + props.icon.name} onClick={handelClick}></i></abbr>
        </div> 
    );
}
 
export default MenuButton;

