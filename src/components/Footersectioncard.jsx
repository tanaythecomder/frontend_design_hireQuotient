import React from 'react'

const Footersectioncard = ({Sectionname, Subsections}) => {
    return (

        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
            <h4 className="text-lg font-semibold mb-2">{Sectionname}</h4>
            <ul>
                {
                    Subsections.map((val)=>{
                        return (
                            <li key={val}>{val}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Footersectioncard