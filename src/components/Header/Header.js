import Navigation from './Navigation'
import Login from './Login'
import './Header.css'

function Header () {
    return (
        <div className='header-container'>
        <h3 className='header-text'>snap</h3>
        <Navigation />
        <Login />
        </div>
    )
}

export default Header