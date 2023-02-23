import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DataTableCourses() {
  const [courses, setCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8088/api/v1/courses");
    console.log(result.data.courseList);
    setCourses(result.data.courseList);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <th scope="row"></th>
                <td>{course.id}</td>
                <Link to={`/courses/${course.id}`}>
                  {" "}
                  <td>{course.name}</td>{" "}
                </Link>
                <td>{course.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
