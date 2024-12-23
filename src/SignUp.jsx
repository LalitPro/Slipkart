import React from "react";
import { useFormik } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function SignUp() {
  function signupApi(values) {
    let a = true;
    axios
      .post("https://myeasykart.codeyogi.io/signup", {
        fullName: values.fullName,
        email: values.email,
        password: values.Password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        bag.props.setUser(user);
        a = false;
        return <Navigate to="/me" />;
      })
      .catch(() => {
        if (a) {
          return <Navigate to="/me" />;
        } else {
          alert("Invalid Credentials");
        }
      });
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    username: Yup.string().required(),
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
      email: "",
      password: "",
      username: "",
    },
    onSubmit: signupApi,
    validationSchema: schema,
  });

  return (
    <div>
      <div className="flex justify-center">
        <Link to="/">
          <img src="/imgs/weshop.png" className="w-32 md:w-40" />
        </Link>
      </div>
      <div className="justify-center mb-4 md:flex">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center m-4 text-center border-2 border-red-400 rounded-md md:w-3/4"
        >
          <h1 className="text-4xl font-black font-Shadows ">Username</h1>
          <input
            onBlur={handleBlur}
            name="username"
            value={values.username}
            onChange={handleChange}
            type="text"
            autoComplete="username"
            required
            className="m-2 text-3xl border-2 border-red-400 rounded font-Qwitcher"
            placeholder="username"
          />

          <h1 className="text-4xl font-black font-Shadows ">Email</h1>
          <input
            onBlur={handleBlur}
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            autoComplete="email"
            required
            type="email"
            className="m-2 text-3xl border-2 border-red-400 rounded font-Qwitcher"
            placeholder="Email"
          />

          {touched.email && errors.email && (
            <div className="p-2 text-2xl text-red-500 rounded font-Shadows">
              {errors.email}
            </div>
          )}

          <h1 className="text-4xl font-black font-Shadows ">Password</h1>
          <input
            onBlur={handleBlur}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            autoComplete="current-password"
            type="password"
            className="m-2 text-3xl border-2 border-red-400 rounded font-Qwitcher"
            placeholder="password"
          />

          {touched.password && errors.password && (
            <div className="p-2 text-2xl text-red-500 rounded font-Shadows">
              {errors.password}
            </div>
          )}

          <button
            disabled={!isValid}
            type="submit"
            className="p-2 m-2 text-2xl bg-red-400 rounded-lg disabled:bg-neutral-700 disabled:hover:none hover:bg-sky-500 font-Dancing"
          >
            CONTINUE
          </button>
        </form>
      </div>

      <div className="mx-4 border-t-2 border-slate-500"></div>

      <div className="flex flex-col items-center justify-center mb-4 md:flex-row">
        <h1 className="flex flex-col items-center text-3xl text-blue-400 md:flex-row font-Pacifico">
          Already Have ACCOUNT?
        </h1>
        <Link
          to="/log-in"
          className="mx-2 text-3xl text-red-400 underline font-Shadows hover:italic"
        >
          {" "}
          <h1>Click Here</h1>{" "}
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
