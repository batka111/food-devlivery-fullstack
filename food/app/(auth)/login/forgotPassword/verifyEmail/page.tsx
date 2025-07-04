"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "your email";

  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    setLoading(true);
    // Жишээ backend хандалт
    await new Promise((res) => setTimeout(res, 1500));
    alert(`Verification email resent to ${email}`);
    setLoading(false);
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Left */}
      <div className="w-1/2 flex flex-col justify-center items-start ml-[150px] p-12">
        <button
          onClick={() => router.back()}
          className="text-2xl text-gray-600 mb-8"
        >
          ←
        </button>

        <div className="flex w-[416px] flex-col">
          <h2 className="text-2xl font-bold mb-2">Please verify Your Email</h2>
          <p className="text-gray-600 mb-6">
            We just sent an email to <strong>{email}</strong>. Click the link in
            the email to verify your account.
          </p>
        </div>

        <button
          onClick={handleResend}
          disabled={loading}
          className={`px-6 py-2 rounded text-white w-full max-w-sm ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {loading ? "Sending..." : "Resend email"}
        </button>
      </div>

      {/* Right */}
      <div className="w-1/2 h-full">
        <img
          src="/imgs/hun.png" // Make sure this image is in public/imgs/hun.png
          alt="Delivery"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
    </div>
  );
}
