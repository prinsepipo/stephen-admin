import { useNavigate } from "react-router-dom";
import { LogOut } from "react-feather";

import './SidebarLogout.css';


const SidebarLogout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <button className="sidebar-logout" onClick={handleClick}>
      <span>Logout</span>
      <LogOut />
    </button>
  )
};


export default SidebarLogout;
