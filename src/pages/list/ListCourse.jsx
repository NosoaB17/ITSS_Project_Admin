import "./listcourse.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableCourse from "../../components/datatable/DatatableCourse";

const ListCourse = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableCourse />
      </div>
    </div>
  );
};

export default ListCourse;
