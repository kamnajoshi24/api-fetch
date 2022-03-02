import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, Div, Head, Input, Button } from "../styles/login";

import { useForm } from "react-hook-form";
function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const formData = (data) => {
    console.log(data);
  };
  return (
    <Main>
      <Div>
        <Head>Login Page</Head>

        <form onSubmit={handleSubmit(formData)}>
          <Input
            type="text"
            {...register("email")}
            placeholder="user name...."
            className="name"
          />
          <Input
            type="password"
            {...register("password")}
            placeholder="password...."
            className="password"
          />
          {/* <Button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Log In
          </Button> */}
          <Button
            type="submit"
            onClick={() => {
              navigate("../dashboard");
            }}
          >
            hit me
          </Button>
        </form>
      </Div>
    </Main>
  );
}
export default Login;
