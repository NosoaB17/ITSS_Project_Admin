import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Margin } from "@mui/icons-material";
import { margin } from "@mui/system";

function New() {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [description, setDescription] = useState("");
  const [ownerId, setOwnerId] = useState();
  const [image, setImage] = useState("");
  const [students, setStudents] = useState();
  const [createdBy, setCreatedBy] = useState();
  const [modifiedBy, setModifiedBy] = useState();

  console.log({
    name,
    categoryId,
    description,
    ownerId,
    image,
    students,
    createdBy,
    modifiedBy,
  });
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCategoryId = (e) => {
    setCategoryId(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleOwnerId = (e) => {
    setOwnerId(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleStudents = (e) => {
    setStudents(e.target.value);
  };
  const handleCreatedBy = (e) => {
    setCreatedBy(e.target.value);
  };
  const handleModifiedBy = (e) => {
    setModifiedBy(e.target.value);
  };

  const handleApi = () => {
    console.log({
      name,
      categoryId,
      description,
      ownerId,
      image,
      students,
      createdBy,
      modifiedBy,
    });
    axios
      .post("http://127.0.0.1:8088/api/v1/courses", {
        name: name,
        categoryId: categoryId,
        description: description,
        ownerId: ownerId,
        image: image,
        students: students,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        }
      })
      .then((result) => {
        console.log(result.data);
        alert("Add courses success");
      })
      .catch((error) => {
        alert("Service error");
        console.log(error);
      });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="newcourses" style={{ marginTop: "100px" }}>
          <header className="header">Add Courses To Website</header>
          <table>
            <tr>
              <td>Name :</td>
              <td>
                <input value={name} onChange={handleName} type="text" />
              </td>
              <br />
            </tr>
            <tr>
              <td>CategoryId :</td>
              <td>
                <input value={categoryId} onChange={handleCategoryId} type="text" />
              </td>
              <br />
            </tr>
            <tr>
              <td>Description :</td>
              <td>
                <input
                  value={description}
                  onChange={handleDescription}
                  type="text"
                />
              </td>
              <br />
            </tr>
            <tr>
              <td>OwnerId :</td>
              <td><input value={ownerId} onChange={handleOwnerId} type="number" /></td>
              <br />
            </tr>          
            <tr>
              <td>Image :</td>
              <td><input value={image} onChange={handleImage} type="text" /></td>
              <br />
            </tr>
            <tr>
              <td>Students :</td>
              <td><input value={students} onChange={handleStudents} type="number" /></td>
              <br />
            </tr>
            <tr>
              <td>CreatedBy :</td>
              <td><input value={createdBy} onChange={handleCreatedBy} type="number" /></td>
              <br />
            </tr>
            <tr>
              <td>ModifiedBy :</td>
              <td><input value={modifiedBy} onChange={handleModifiedBy} type="number" /></td>
            </tr>
          </table>
          <Link to="/courses" onClick={handleApi}>
            <button>Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default New;
