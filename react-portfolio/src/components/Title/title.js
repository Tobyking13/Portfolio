import { useLocation } from 'react-router-dom';
import './style.css'


function Title() {
    const location = useLocation();
    const path = location.pathname;
    let pageTitle;
    switch(path){
        case '/':
            pageTitle = "Toby King Portfolio";
            break;
        case '/about':
            pageTitle = "About Me";
            break;
        case '/portfolio':
            pageTitle = "Projects";
            break;
        case '/contact':
            pageTitle = "Contact Me";
            break;
        default:
            break;
    }

   

    return (
        <div className='title-div'>
            <h1 className="display-4 title" >{pageTitle}</h1>
        </div>
    )
}

export default Title;
