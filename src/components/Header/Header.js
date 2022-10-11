import Navigation from './Navigation'
import NavItem from './NavItem'
import Login from './Login'
import { ReactComponent as ArrowOne } from '../../assets/icon-arrow-up.svg'
import { ReactComponent as ArrowTwo } from '../../assets/icon-arrow-down.svg'
import { ReactComponent as LogoOne } from '../../assets/icon-todo.svg'
import { ReactComponent as LogoTwo } from '../../assets/icon-calendar.svg'
import { ReactComponent as LogoThree } from '../../assets/icon-reminders.svg'
import { ReactComponent as LogoFour } from '../../assets/icon-planning.svg'
import './Header.css'
import { useState } from 'react'

function Header () {
const[navContainer, setNavContainer] = useState(false)

    return (
        <div className='header-container'>
        <h3 className='header-text'>snap</h3>
        <Navigation>
            <NavItem className="dropdown-items-container" title='Features' icon={<ArrowOne className="arrow-icon"/>} >
                <div className="dropdown-items"><span>{<LogoOne/>}</span>Todo List</div>
                <div className="dropdown-items"><span>{<LogoTwo/>}</span>Calendar</div>
                <div className="dropdown-items"><span>{<LogoThree/>}</span>Reminders</div>
                <div className="dropdown-items"><span>{<LogoFour/>}</span>Planning</div>
            </NavItem>
            <NavItem className = {navContainer ? "second-one" : "dropdown-items-container second-one"} onClick ={() => setNavContainer(navContainer = !navContainer)}  title='Company' icon={<ArrowOne className="arrow-icon"/>}>
                <div className="dropdown-items">History</div>
                <div className="dropdown-items">Our Team</div>
                <div className="dropdown-items">Blog</div>
            </NavItem>
            <NavItem title='Careers'/>
            <NavItem title='About'/>
        </Navigation>
        <Login />
        </div>
    )
}

export default Header