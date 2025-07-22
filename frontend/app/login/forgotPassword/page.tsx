// app/forgot-password/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ForgotPassword() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Буруу Имэйл байна!")
        .required("Имэйл шаардлагатай!"),
    }),
    onSubmit: (values) => {
      // Энд reset линк илгээх API холбож болно
      console.log("Sending reset link to:", values.email);
      router.push(
        `/login/forgotPassword/verifyEmail?email=${encodeURIComponent(
          values.email
        )}`
      );
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
            onClick={() => router.back()}
            className="text-gray-500 text-2xl"
          >
            ←
          </button>

          <h2 className="text-2xl font-bold">Reset your password</h2>
          <p className="text-sm text-gray-500">
            Enter your email to receive a password reset link.
          </p>

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full border px-4 py-2 rounded ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded bg-black text-white hover:bg-gray-900"
          >
            Send link
          </button>

          <p className="text-sm text-gray-600 mt-2">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>

      {/* Right side - image */}
      <div className="w-1/2 h-full">
        <img
          src="/imgs/hun.png"
          alt="Delivery image"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
    </div>
  );
}
