import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    //<Link to="/">Dashboard</Link>

    <div className="sidebar">
      <div className="top">
        <span className="logo">ITCO HUST</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">HOME PAGE</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">COURSES</p>
          <Link to="/courses">
            <li>
              <MenuBookIcon className="icon" />
              <span>Courses</span>
            </li>
          </Link>
          <Link to="/courses/new">
            <li>
              <MenuBookIcon className="icon" />
              <span>Add New Courses</span>
            </li>
          </Link>

          <p className="title">USERS</p>
          <Link to="/users">
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/:userId">
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
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
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
