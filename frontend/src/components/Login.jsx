import axios from "axios";
import { Button, Input, Label } from "keep-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      console.log(data);
      navigate("/chat");
    } catch (error) {
      console.log(error);
      toast.warn(error.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="bg-white w-80 p-8 rounded-md flex flex-col items-center">
      <ToastContainer />
      <h1 className="text-3xl  mb-10">Login</h1>
      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="w-full mb-5 space-y-1">
          <Label htmlFor="email">Enter Email</Label>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            type="email"
          />
        </fieldset>

        <fieldset className="w-full  space-y-1">
          <Label htmlFor="password">Enter Password</Label>
          <Input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="password"
          />
        </fieldset>
        <Button className="w-full mt-5 rounded-md mb-3" size="sm">
          Login
        </Button>
      </form>
      <h3>
        Don&apos;t have an account?
        <span className="text-blue-500 cursor-pointer">
          <Link to="/register"> Signup</Link>
        </span>
      </h3>
    </div>
  );
};

export default Login;
