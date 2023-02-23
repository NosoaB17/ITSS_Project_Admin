import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DetailsCourses() {
  const [courses, setCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get(
      `http://localhost:8088/api/v1/courses/${id}`
    );
    console.log(result.data);
    setCourses(result.data);
  };

  const deleteCourses = async (id) => {
    axios
      .delete(`http://127.0.0.1:8088/api/v1/courses/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        }
      })
      .then((result) => {
        console.log(result.data);
        alert("Delete courses successfully");
      })
      .catch((error) => {
        alert("Service error");
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Courses Details</h2>

          <div className="card">
            <div className="card-header">
              Details of course number : {courses.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {courses.name}
                </li>
                <li className="list-group-item">
                  <b>Description:</b>
                  {courses.description}
                </li>
                <li className="list-group-item">
                  <b>Date Created:</b>
                  {courses.created}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/courses"}>
            Back to Home
          </Link>
          <button
            className="btn btn-danger mx-2"
            onClick={() => deleteCourses(courses.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
