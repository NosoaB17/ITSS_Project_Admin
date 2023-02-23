import axios from "axios";

const API_URL = "http://localhost:8088/api/v1/courses";

const accessToken = localStorage.getItem("accessToken");
const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
}

export const getAllCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getCourseById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const createCourse = async (request) => {
    try {
        const response = await axios.post(`${API_URL}`, JSON.stringify(request) , { headers });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const updateCourse = async (request) => {
    try {
        const response = await axios.put(`${API_URL}`, request, { headers });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const deleteCourse = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, { headers });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

