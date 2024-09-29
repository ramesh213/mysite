
import React from 'react';
import PuLogo from '../assets/images/pu-logo.png';

const Education = () => {
  return (
    <>
      {/* Flex container for logo and university name */}
      <div className='flex items-center justify-start gap-2  mx-4 max-md:ml-1 max-md:flex-col'>
        {/* University logo */}
        <div className='mt-8 max-md:mt-4'>
          <img src={PuLogo} alt="education-logo" className='w-10 h-10' />
        </div>
        {/* University name */}
        <div>
          <h1 className='font-bold text-lg mt-8 max-md:mt-0'>
            Purbanchal University School of Science & Technology
          </h1>
        </div>
      </div>

      {/* University location */}
      <p className='font-exo ml-16 max-md:ml-4'>
        Biratnagar-Morang, Nepal
      </p>

      {/* Programme details */}
      <div className='ml-16 mt-4 flex gap-3 font-exo text-xl max-md:ml-4 max-md:flex-col'>
        <h1>Programme:</h1>
        <h1>Bachelor of Computer Application (4 yrs)</h1>
      </div>

      {/* GPA and Passed Year */}
      <div className='ml-16 mt-4 font-exo max-md:ml-2'>
        <h1 className='text-lg'>GPA- 3.2</h1>
        <h1 className='text-lg'>Passed Year- 2024</h1>
      </div>
    </>
  );
};

export default Education;
