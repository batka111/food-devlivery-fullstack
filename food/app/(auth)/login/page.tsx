"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Зөв имэйл хаяг оруулна yy")
        .required("Имэйл шаардлагатай"),
      password: Yup.string()
        .min(6, "Нууц үгээ оруулна yy.")
        .required("Нууц үг шаардлагатай."),
    }),
    onSubmit: (values) => {
      // Email дамжуулж password хуудас руу чиглүүлнэ
      router.push(`/HomePageIn`);
    },
  });

  return (
    <div className="flex h-screen font-sans">
      {/* Left side */}
      <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-sm space-y-4"
        >
          <button
            type="button"
            className="text-gray-500 text-2xl focus:outline-none"
            // onClick={() => router.back()}
          >
            ←
          </button>

          <h2 className="text-2xl font-bold">Log In</h2>
          <p className="text-sm text-gray-500">
            Log in to enjoy your favorite dishes.
          </p>

          {/* Email input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full border px-4 py-2 rounded focus:outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full border px-4 py-2 rounded focus:outline-none ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <a
            href="/login/forgotPassword"
            className=" hover:underline underline-offset-1"
          >
            Forgot password?
          </a>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className={`w-full py-2 rounded border mt-5 ${
              formik.isValid && formik.dirty
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Let's Go
          </button>

          <p className="text-sm text-gray-600 mt-2 ml-16 ">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>

      {/* Right side - image */}
      <div className="w-1/2 h-full">
        <img
          src="/imgs/hun.png"
          alt="Food delivery"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
    </div>
  );
}
