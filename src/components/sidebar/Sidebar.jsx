import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ITCO HUST</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <MenuBookIcon className="icon" />
            <span>Courses</span>
          </li>
          <li>
            <GroupIcon className="icon" />
            <span>Users</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Setting</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <SyncAltIcon className="icon" />
            <span>Log Out</span>
          </li>
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
