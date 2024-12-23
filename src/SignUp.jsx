<<<<<<< HEAD
import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate, Navigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Button from "./Button";
=======
import React, { useContext } from "react";
import Button from "./Button";
import { useFormik, withFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { UserContext } from "./Contexts";
>>>>>>> 0f75e58 (login)

function SignUp({ user }) {
  const navigate = useNavigate();

  const signupApi = (values) => {
    axios
      .post("https://myeasykart.codeyogi.io/signup", {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        navigate("/me"); // Redirect after successful signup
      })
      .catch(() => {
        alert("Signup failed. Please try again.");
      });
  };

  const schema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: signupApi,
  });

<<<<<<< HEAD
=======
export function signUp({
  handleSubmit,
  values,
  handleChange,
  resetForm,
  errors,
  handleBlur,
  touched,
  dirty,
}) {
  const { user } = useContext(UserContext);
>>>>>>> 0f75e58 (login)
  if (user) {
    return <Navigate to="/me" />;
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <div className="flex items-center gap-2 px-5">
          <img src="../images/favicon.png" className="h-16" />
          <h1 className="self-center text-2xl font-bold text-red-500">
            SignUp To Dripcart
          </h1>
        </div>

        <label className="mb-2 text-sm font-semibold">Full Name</label>
        <input
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Full Name"
          className="p-2 mb-2 border border-gray-300 rounded"
        />
        {touched.fullName && errors.fullName && (
          <div className="mb-2 text-sm text-red-500">{errors.fullName}</div>
        )}

        <label className="mb-2 text-sm font-semibold">Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          type="email"
          className="p-2 mb-2 border border-gray-300 rounded"
        />
        {touched.email && errors.email && (
          <div className="mb-2 text-sm text-red-500">{errors.email}</div>
        )}

        <label className="mb-2 text-sm font-semibold">Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
          type="password"
          className="p-2 mb-2 border border-gray-300 rounded"
        />
        {touched.password && errors.password && (
          <div className="mb-2 text-sm text-red-500">{errors.password}</div>
        )}

        <label className="mb-2 text-sm font-semibold">Confirm Password</label>
        <input
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm Password"
          type="password"
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <div className="mb-2 text-sm text-red-500">
            {errors.confirmPassword}
          </div>
        )}

        <div className="flex flex-col items-start justify-center gap-5 mt-5">
          <Button type="sumbit" disabled={!isValid} className="self-end mt-3">
            Login
          </Button>{" "}
          <Link to="/login" className="text-sm text-blue-500">
            Doesn't Have an Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
