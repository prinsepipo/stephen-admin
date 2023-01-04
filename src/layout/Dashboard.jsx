import Sidebar from "../components/Sidebar";

import './Dashboard.css';


const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-body">{props.children}</main>
    </div>
  );
};


export default Dashboard;
