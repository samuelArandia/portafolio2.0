import React from "react";
import '../app/globals.css'

const Loader = () => {

    return (
        <div className="fixed inset-0 z-50 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
            <div className="spinner">
                <div className="spinner1"></div>
            </div>
        </div>
    )
}   

export default Loader;