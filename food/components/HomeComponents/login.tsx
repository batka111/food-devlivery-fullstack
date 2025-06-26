"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUpPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Зөв имэйл хаяг оруулна уу")
        .required("Имэйл шаардлагатай"),
    }),
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      alert(`Submitted: ${values.email}`);
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
          >
            ←
          </button>

          <h2 className="text-2xl font-bold">Create your account</h2>
          <p className="text-sm text-gray-500">
            Sign up to explore your favorite dishes.
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

          {/* Submit button */}
          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className={`w-full py-2 rounded border ${
              formik.isValid && formik.dirty
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Let's Go
          </button>

          <p className="text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>

      {/* Right side - image */}
      <div className="w-1/2 h-full">
        <img
          src="imgs/hun.png" // Зураг байршуулах (public/signup-image.jpg)
          alt="Food delivery"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
    </div>
  );
}
