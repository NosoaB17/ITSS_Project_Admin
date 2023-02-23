import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import "./home.scss";


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
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
