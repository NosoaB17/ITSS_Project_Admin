import axios from "axios";

const API_URL = "http://localhost:8088/auth";

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        });

        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("role", response.data.roleName);
        }

        alert("Login successful");

        return response.data;
    } catch (err) {
        console.log(err);
        alert("Error logging in")
    }
}

export const logout = async() => {
    try {
        const response = await axios.post(`${API_URL}/logout`);

        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("role");
    } catch (err) {
        console.log(err);
    }
}