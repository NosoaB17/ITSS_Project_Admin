import "./listcourse.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import DatatableCourse from "../../components/datatable/DatatableCourse";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

const ListCourse = () => {
  return (
    // <div className="list">
    //   <Sidebar />
    //   <div className="listContainer">
    //     <Navbar />
    //     <DatatableCourse />
    //     <div>
    //       <h1 className="course">Courses</h1>
    //     </div>
    //   </div>
    // </div>
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="course" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Courses</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ListCourse;
