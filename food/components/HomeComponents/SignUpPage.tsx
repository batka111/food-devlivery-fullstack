// "use client";

// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";

// export default function SignUpPage() {
//   const router = useRouter();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Зөв имэйл хаяг оруулна уу")
//         .required("Имэйл шаардлагатай"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const res = await fetch("http://localhost:3303/user/sign-up", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email: values.email }),
//         });

//         const data = await res.json();
//         console.log("📩 Backend response:", data);

//         if (res.ok) {
//           // Имэйл дамжуулж дараагийн password хуудас руу чиглүүлнэ
//           router.push(
//             `/signup/password?email=${encodeURIComponent(values.email)}`
//           );
//         } else {
//           alert(data.message || "Бүртгэл амжилтгүй боллоо.");
//         }
//       } catch (err) {
//         console.error("❌ Алдаа:", err);
//         alert("Сервертэй холбогдож чадсангүй.");
//       }
//     },
//   });

//   return (
//     <div className="flex h-screen font-sans">
//       {/* Left side */}
//       <div className="w-1/2 flex items-center justify-center bg-white p-10">
//         <form
//           onSubmit={formik.handleSubmit}
//           className="w-full max-w-sm space-y-4"
//         >
//           <button
//             type="button"
//             className="text-gray-500 text-2xl focus:outline-none"
//             onClick={() => router.back()}
//           >
//             ←
//           </button>

//           <h2 className="text-2xl font-bold">Create your account</h2>
//           <p className="text-sm text-gray-500">
//             Sign up to explore your favorite dishes.
//           </p>

//           {/* Email input */}
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.email}
//               className={`w-full border px-4 py-2 rounded focus:outline-none ${
//                 formik.touched.email && formik.errors.email
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
//             )}
//           </div>

//           {/* Submit button */}
//           <button
//             type="submit"
//             disabled={!(formik.isValid && formik.dirty)}
//             className={`w-full py-2 rounded border ${
//               formik.isValid && formik.dirty
//                 ? "bg-blue-600 text-white hover:bg-blue-700"
//                 : "bg-gray-200 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             Let's Go
//           </button>

//           <p className="text-sm text-gray-600 mt-2">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-600 hover:underline">
//               Log in
//             </a>
//           </p>
//         </form>
//       </div>

//       {/* Right side - image */}
//       <div className="w-1/2 h-full">
//         <img
//           src="/imgs/hun.png"
//           alt="Food delivery"
//           className="w-full h-full object-cover rounded-l-xl"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Зөв имэйл хаяг оруулна уу")
        .required("Имэйл шаардлагатай"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:3303/user/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: values.email }),
        });

        const data = await res.json();
        console.log("📩 Backend response:", data);

        if (res.ok) {
          // Имэйл дамжуулж дараагийн password хуудас руу чиглүүлнэ
          router.push(
            `/signup/password?email=${encodeURIComponent(values.email)}`
          );
        } else {
          alert(data.message || "Бүртгэл амжилтгүй боллоо.");
        }
      } catch (err) {
        console.error("❌ Алдаа:", err);
        alert("Сервертэй холбогдож чадсангүй.");
      }
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
            onClick={() => router.back()}
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
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
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
