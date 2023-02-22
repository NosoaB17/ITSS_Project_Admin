import "./listuser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableUser from "../../components/datatable/DatatableCourse";

const ListUser = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableUser />
      </div>
    </div>
  );
};

export default ListUser;
