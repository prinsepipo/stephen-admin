import SidebarNavItem from './SidebarNavItem';
import SidebarLogout from './SidebarLogout';

import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar__heading">Admin Dashboard</h1>
      <ul className="sidebar-nav-list">
        <SidebarNavItem to="/" title="Dashboard" />
        <SidebarNavItem to="/users" title="Users" />
        <SidebarNavItem to="/reports" title="Reports" />
      </ul>
      <SidebarLogout />
    </div>
  );
};


export default Sidebar;
