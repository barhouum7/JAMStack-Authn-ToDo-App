import React from 'react'

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-gray-800">My ToDos</p>
            <div className="flex">
                <a href="/api/logout" 
                className="my-2 px-4 py-2 border-2 border-blue-500 rounded-md bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg hover:bg-red-600 transform hover:bg-blue-600 transition duration-500 ease-in-out hover:scale-125"
                >Logout</a>
                <a href="/api/login" 
                className="my-2 px-4 py-2 border-2 border-blue-500 rounded-md bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg hover:bg-red-600 transform hover:bg-blue-600 transition duration-500 ease-in-out hover:scale-125"
                >Login</a>
            </div>
        </nav>
    )
}
