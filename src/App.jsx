import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import section1 from "/Section1_image.png"
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Layout from './components/Layout'

function App() {


  return (
    <>

      <Layout>
       
        <div className='home'>
          <div className='flex flex-col justify-center items-center'>
            <Button content={"An other way to manage time️"} bgColor={true} />

            <div className='text-7xl font-bold tracking-wide'>
              Your new favorite
            </div>
            <div className='text-7xl font-bold'>
              calendar 🗓️ app
            </div>

            <div className='text-[19px] mt-7 text-gray-500'>
              Here you should explain how cool your app is. Remember,<br /> focus on the benefits for your users, not on the features.
            </div>

            <Button content={"Get started, it's free"} customStyle={"mt-8 py-3 px-7"} />
            <div className='text-xs mt-1'>Free 14 days trials,no credit card needed</div>
            <div>
              Rating section
            </div>
            <img className="px-6" src={section1} alt="" />
          </div>


          <div className='mt-[190px] flex flex-col justify-center items-center'>
            <Button content={"Our main features🦸"} bgColor={true} />

            <div className='text-7xl font-bold tracking-wide'>
              Your new favorite
            </div>
            <div className='text-7xl font-bold'>
              calendar 🗓️ app
            </div>

            <div className='text-[19px] mt-7 text-gray-500'>
              Here you should explain how cool your app is. Remember,<br /> focus on the benefits for your users, not on the features.
            </div>

            <Button content={"Get started, it's free"} customStyle={"mt-8 py-3 px-7"} />
            <div className='text-xs mt-1'>Free 14 days trials,no credit card needed</div>
            <div>
              Rating section
            </div>
            <img src={section1} alt="" />
          </div>
          <div className='mt-[80px] flex flex-col justify-center items-center'>
            <Button content={"An other way to manage time️"} bgColor={true} />

            <div className='text-7xl font-bold tracking-wide'>
              Your new favorite
            </div>
            <div className='text-7xl font-bold'>
              calendar 🗓️ app
            </div>

            <div className='text-[19px] mt-7 text-gray-500'>
              Here you should explain how cool your app is. Remember,<br /> focus on the benefits for your users, not on the features.
            </div>

            <Button content={"Get started, it's free"} customStyle={"mt-8 py-3 px-7"} />
            <div className='text-xs mt-1'>Free 14 days trials,no credit card needed</div>
            <div>
              Rating section
            </div>
            <img src={section1} alt="" />
          </div>
          <div className='mt-[80px] flex flex-col justify-center items-center'>
            <Button content={"An other way to manage time️"} bgColor={true} />

            <div className='text-7xl font-bold tracking-wide'>
              Your new favorite
            </div>
            <div className='text-7xl font-bold'>
              calendar 🗓️ app
            </div>

            <div className='text-[19px] mt-7 text-gray-500'>
              Here you should explain how cool your app is. Remember,<br /> focus on the benefits for your users, not on the features.
            </div>

            <Button content={"Get started, it's free"} customStyle={"mt-8 py-3 px-7"} />
            <div className='text-xs mt-1'>Free 14 days trials,no credit card needed</div>
            <div>
              Rating section
            </div>
            <img src={section1} alt="" />
          </div>
        </div>
      </Layout>




    </>
  )
}

export default App
