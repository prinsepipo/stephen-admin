import { Link, useResolvedPath } from "react-router-dom";
import { ChevronRight } from "react-feather";


import './SidebarNavItem.css';


const SidebarNavItem = (props) => {
  const classes = ['sidebar-nav-item'];

  const path = useResolvedPath();

  if (path.pathname === props.to) {
    classes.push('sidebar-nav-item--active');
  }

  return (
    <li className={classes.join(' ')}>
      <Link className="sidebar-nav-item__link" to={props.to}>
        <span>{props.title}</span>
        <ChevronRight className="sidebar-nav-item__icon" />
      </Link>
    </li>
  );
};


export default SidebarNavItem;
