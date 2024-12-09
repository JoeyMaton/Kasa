import { Link } from 'react-router-dom'
import "../../styles/nav.css"
 
function Nav() {
    return (
        <nav className='nav-header'>
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </nav>
    )
}

export default Nav