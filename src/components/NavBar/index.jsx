import { NavLink } from "react-router-dom";

import './index.css'

const Navbar = () => {
 
  return (
    <nav >
      <NavLink  to="/">
        <span>Logo</span>
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/"
            
          >
            Home
          </NavLink>
        </li>
       
           
            <li>
              <NavLink
                to="/sobre"
               
              >
                Sobre
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contato"
               
              >
                Contato
              </NavLink>
            </li>

            
        
      </ul>
    </nav>
  );
};

export default Navbar;
