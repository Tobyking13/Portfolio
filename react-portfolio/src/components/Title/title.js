import { useLocation } from 'react-router-dom';

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

    const style = {
        position: 'relative',
        top: '10px',
        left: '10px'
    }

    return (
        <div>
            <h1 className="display-4" style={style}>{pageTitle}</h1>
        </div>
    )
}

export default Title;