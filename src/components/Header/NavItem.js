import { useState } from 'react'


function NavItem(props) {
const[open,setOpen] = useState(false)
const[onHover, setOnHover] = useState(false)


function toggleChange () {
    setOnHover(true)
}

function toggleBackChange () {
    setOnHover(false)
}

    return (
        <div>
            <a href="#" className={onHover ? "hover-color" : "icon-anchor"} onClick={()=>setOpen(!open)} onMouseEnter={toggleChange} onMouseLeave={toggleBackChange}>{props.title}{props.icon}</a>
            {open && <section className={props.className}>{props.children}</section>}
        </div>
    )
}

export default NavItem