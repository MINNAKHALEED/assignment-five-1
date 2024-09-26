
import NavBar from '../NavBarcomponent/NavBar';

import './Header.css'

const Header = () => {

const links = [
  {title : "home"},
  {title : "shop"},
  {title : "contact"},

]

  return (
    <div className="header">
    <NavBar links={links}/>
    </div>
  );
}

export default Header;
