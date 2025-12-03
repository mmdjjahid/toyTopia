import React from "react";
import { useNavigate } from "react-router";

const NotFund = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 text-white text-center px-4">
      <title>Kids Toy: 404 Not Found</title>
      <h1 className="text-8xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>

      <button onClick={() => navigate(-1)} className="btn ">
        Go Back
      </button>
    </div>
  );
};

export default NotFund;
