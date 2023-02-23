import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    //<Link to="/">Dashboard</Link>

    <div className="sidebar">
      <div className="top">
        <span className="logo">ITSS HUST</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/courses">
            <li>
              <MenuBookIcon className="icon" />
              <span>Courses</span>
            </li>
          </Link>
          <Link to="/courses/new">
            <li>
              <MenuBookIcon className="icon" />
              <span>Add Courses</span>
            </li>
          </Link>

          <Link to="/users">
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/login">
            <li>
              <SyncAltIcon className="icon" />
              <span>Log Out</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
