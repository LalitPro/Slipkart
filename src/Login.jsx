import React from "react";
import Button from "./Button";
import { useFormik, withFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.Password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      alert("Invalid Credentials");
    });
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email must required")
    .email("Email must be a valid email"),
  Password: Yup.string().required().min(6).max(12),
});

const initialValues = {
  email: "",
  password: "",
};

export function Login({
  handleSubmit,
  values,
  handleChange,
  resetForm,
  errors,
  handleBlur,
  touched,
  dirty,
  user,
}) {
  if (user) {
    return <Navigate to="/me" />;
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <div className="flex items-center justify-center gap-3">
          <img src="../images/favicon.png" alt="logo" className="w-8 mb-3" />
          <h1 className="self-center mb-4 text-2xl">Login To DripCart</h1>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email-address"
            autoComplete="email"
            onChange={handleChange}
            onBlur={handleBlur}
            required
            name="email"
            value={values.email}
            className="relative block w-full p-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none md:text-lg sm:text-sm focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 focus:z-10 rounded-t-md"
            placeholder="Email Address"
          />
        </div>
        {touched.email && errors.email && (
          <div className="text-red-500">{errors.email}</div>
        )}
        <div>
          <label htmlFor="Password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="myPassword"
            autoComplete="current-password"
            required
            name="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Password}
            className="relative block w-full p-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none md:text-lg sm:text-sm focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 focus:z-10 rounded-b-md"
            placeholder="Password"
          />
        </div>
        {touched.Password && errors.Password && (
          <div className="text-red-500">{errors.Password}</div>
        )}
        <Button
          type="submit"
          className="self-end my-3 font-bold md:text-lg disabled:bg-red-400 "
          disabled={dirty}
        >
          Login
        </Button>
        <Link to="/signup/">Doesn't have an Account?</Link>
      </form>
    </div>
  );
}

const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
});

const EasyLogin = myHOC(Login);

export default EasyLogin;
