

function Navigation () {
    const navItems = ['Features', 'Company', 'Careers', 'About']
    return (
        <ul className="navigation-container">
        {navItems.map((item) => {
            return <li  className="list-items" key={item}>{item}</li>
        })}
        </ul>
    )
}

export default Navigation