import React, { useEffect, useState } from "react";
import axios from "axios";

function CourseFetching() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8088/api/v1/courses")
      .then((res) => {
        console.log(res);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {courses.length > 0 && (
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CourseFetching;
