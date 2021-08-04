// import React from 'react'
// import { Link } from 'react-router-dom'

// function Nav() {

  
//   return (
//     <nav className="navbar is-fixed-top is-hoverable">
//       {/* <div className="container"> */}
//       <ul>
//         <li> 
//           <Link to="/" className="nav-button">HOME</Link>
//         </li>
//         <li> 
//           <Link to="/about" className="nav-button">ABOUT</Link>
//         </li>
//         <li> 
//           <Link to="/services" className="nav-button">SERVICES</Link>
//         </li>
//         <li> 
//           <Link to="/contact" className="nav-button">CONTACT</Link>
//         </li>
//       </ul>
//       {/* <div className="navbar-start navbar-item">
//           <Link to="#about-section" className="nav-button">ABOUT</Link>
//         </div>
//         <div className="navbar-item">
//           <Link to="#services-section" className="nav-button">SERVICES</Link>
//         </div>
//         <div className="navbar-item">
//           <Link to="#contact-section" className="nav-button">CONTACT</Link>
//         </div> */}
//       {/* </div> */}
//     </nav>
//   )
// }

// export default Nav

import React from 'react'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'


function Nav()  {

  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname } = useLocation()

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="navbar is-fixed-top has-dropdown is-hoverable">
      <div className="container">
        <div className="navbar-brand">
          {/* <Link to="#top"><button className="title"></button></Link> */}
          <span onClick={handleMenuToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start navbar-item">
            <Link to="/" className="nav-button">Home</Link>
          </div>
          <div className="navbar-end">
            {/* <div className="navbar-item">
              <Link to="/" className="nav-button" onClick={(event) => { 
                event.target.blur()
              }}>Home</Link>
            </div> */}
            <div className="navbar-item">
              <Link to="/about" className="nav-button" onClick={(event) => { 
                event.target.blur()
              }}>About</Link>
            </div>
            <div className="navbar-item">
              <Link to="/services" className="nav-button" onClick={(event) => { 
                event.target.blur()
              }}>Services</Link>
            </div>
            <div className="navbar-item">
              <Link to="/contact" className="nav-button">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Nav