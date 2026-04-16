import React from 'react';
import { Link } from 'react-router';

const EmptyCard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-sm w-full">

                <div className="text-6xl mb-4">📭</div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    No Data Found
                </h2>

                <p className="text-gray-500 mb-6">
                    You don’t have any items yet. Start by adding something new.
                </p>

                <Link to={"/"}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
                        Add New
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EmptyCard;