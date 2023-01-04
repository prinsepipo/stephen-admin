import { Outlet } from "react-router-dom";
import Dashboard from "../layout/Dashboard";


const Home = () => {
  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
};


export default Home;
