"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";

export default function PasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    } else {
      router.push("/signup");
    }
  }, [searchParams, router]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/,
          "Password must contain both letters and numbers"
        )
        .required("Required"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const data = { email, password: values.password };
      console.log("Submitting password form:", data);
      alert("Password set successfully!");
    },
  });

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left - Form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-sm space-y-4"
        >
          <button
            type="button"
            className="text-gray-500 text-xl mb-2"
            onClick={() => router.back()}
          >
            ←
          </button>

          <h2 className="text-2xl font-bold">Create a strong password</h2>
          <p className="text-sm text-gray-500">
            Create a strong password with letters and numbers.
          </p>

          {/* Password */}
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
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

          {/* Confirm Password */}
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="confirm"
              placeholder="Confirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm}
              className={`w-full border px-4 py-2 rounded focus:outline-none ${
                formik.touched.confirm && formik.errors.confirm
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.confirm && formik.errors.confirm && (
              <p className="text-sm text-red-500 mt-1">
                {formik.errors.confirm}
              </p>
            )}
          </div>

          {/* Show password toggle */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-sm text-gray-600">
              Show password
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className={`w-full py-2 rounded ${
              formik.isValid && formik.dirty
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Let’s Go
          </button>

          {/* Log in link */}
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>

      {/* Right - Image */}
      <div className="w-1/2 h-full hidden md:block">
        <img
          src="/imgs/hun.png"
          alt="Delivery person"
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
}
