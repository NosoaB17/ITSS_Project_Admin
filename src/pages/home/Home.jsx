import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import DataTableCourses from "../../components/datatable/DatatableCourse";


const Home = () => {


  return (
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
          <DataTableCourses />
        </div>
      </div>
    </div>
  );
};

export default Home;
