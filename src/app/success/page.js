import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          {/* Replace this with your SVG or image */}
          <div className="text-6xl mb-4">😊</div>
          <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
          <p className="text-gray-600">Thank you for your purchase.</p>
        </div>
        <div className="mt-6">
          <Link
            href="/"
            className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
