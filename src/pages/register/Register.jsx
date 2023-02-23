import { useState } from "react";
import "./register.scss";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState();
  console.log({ username, password, email, name, phonenumber, gender });
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleApi = () => {
    console.log({ username, password, email, name, phonenumber, gender });
    axios
      .post("http://127.0.0.1:8088/auth/register", {
        username: username,
        password: password,
        email: email,
        name: name,
        phonenumber: phonenumber,
        gender: gender,
      })
      .then((result) => {
        console.log(result.data);
        alert("Sign up success");
      })
      .catch((error) => {
        alert("Service error");
        console.log(error);
      });
  };

  return (
    <div className="register">
      <header className="header">Register Form</header>
      Username :{" "}
      <input value={username} onChange={handleUsername} type="text" /> <br />
      Password :{" "}
      <input value={password} onChange={handlePassword} type="text" /> <br />
      Email :
      <input value={email} onChange={handleEmail} type="text" /> <br />
      Name : <input value={name} onChange={handleName} type="text" /> <br />
      Phone Number :{" "}
      <input value={phonenumber} onChange={handlePhoneNumber} type="text" />
      <br />
      Gender : <input value={gender} onChange={handleGender} type="number" />
      {}
      <br />
      <button onClick={handleApi}>SIGNUP</button>
    </div>
  );
}

export default Register;
