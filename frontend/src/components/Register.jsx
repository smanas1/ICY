import { Button, Input, Label } from "keep-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-white w-80 p-8 rounded-md flex flex-col items-center">
      <h1 className="text-3xl  mb-10">Register</h1>
      <fieldset className="w-full mb-5 space-y-1">
        <Label htmlFor="name">Enter Name</Label>
        <Input id="name" placeholder="Enter email" type="text" />
      </fieldset>
      <fieldset className="w-full mb-5 space-y-1">
        <Label htmlFor="email">Enter Email</Label>
        <Input id="email" placeholder="Enter email" type="email" />
      </fieldset>

      <fieldset className="w-full  space-y-1">
        <Label htmlFor="password">Enter Password</Label>
        <Input id="password" placeholder="Enter Password" type="password" />
      </fieldset>
      <Button className="w-full mt-5 rounded-md mb-3" size="sm">
        Login
      </Button>
      <h3>
        Already have an account?
        <span className="text-blue-500 cursor-pointer">
          <Link to="/"> Signin</Link>
        </span>
      </h3>
    </div>
  );
};

export default Register;
