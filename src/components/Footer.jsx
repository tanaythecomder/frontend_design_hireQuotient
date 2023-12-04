import React from 'react';
import data from '../assets/footer.json';

const Footer = () => {
  return (
    <footer className="bg-[#f1f2f4] text-black  pt-[60px] pb-[30px] mt-[150px]">
      <div className="container flex flex-wrap mx-auto">
        {/* Company Details */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 mr-[-120px]">
          <img src="/path/to/your/logo.png" alt="Company Logo" className="w-16 h-16 mb-4" />
          <div>
            <h3 className="text-xl font-semibold">{data.companyName}</h3>
            <p>{data.address}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
          </div>
        </div>

        {/* Sections and Subsections */}
        <div className="w-full md:w-1/2 lg:w-3/4 flex flex-wrap  ">
          {data.sections.map((section, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 mb-4 mr-[-90px] p-3">
              <h4 className="text-xl font-bold mb-2 ">{section.name}</h4>
              <ul className='pt-4'>
                {section.subsections.map((subsection, subIndex) => (
                  <li className='text-gray-500 py-1' key={subIndex}>{subsection}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='mt-9'>
            Animation
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
