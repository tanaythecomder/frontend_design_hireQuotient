import React from 'react'

const Button = ({ content, bgColor, customStyle}) => {
    return (
        <button
            type="button"
            className={`${customStyle} ${bgColor?"bg-gray-100 text-black":"bg-black text-white"}  focus:ring-4 focus:outline-none  font-medium rounded-xl text-lg  px-5 py-2 mx-3 text-center`}
        >
            {content}
        </button>
    )
}

export default Button