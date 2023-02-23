import "./listcourse.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableCourse from "../../components/datatable/DatatableCourse";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

const ListCourse = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div>
          <h1 className="course">
          Courses
          <DatatableCourse />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ListCourse;
