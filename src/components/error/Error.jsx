import React from 'react';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

            {/* Subtitle */}
            <h2 className="text-5xl md:text-3xl font-semibold mt-4 text-gray-800">
                Oops! Page not found
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-2 max-w-md">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>

            {/* Button */}
            <Link to="/">
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
                    Go Back Home
                </button>
            </Link>

            {/* Optional Illustration */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                alt="404 illustration"
                className="w-64 mt-10 opacity-80"
            />
        </div>
    );
};

export default Error;