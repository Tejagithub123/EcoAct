import React from 'react'
import Image from '../components/nareeta-martin-FoG7PKNYjpM-unsplash.jpg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <div>
        <section className="mb-20">
          <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
            
              <div className="grid lg:grid-cols-2 gap-12 items-center">
               
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">"Sort Smarter, recycle better - <br /><span className="text-green-600">let's keep our planet greener!"</span></h1>
              
                <div className="mb-12 lg:mb-0 flex justify-center"> {/* Center image on all screen sizes */}
                  <img
                    src={Image}
                    className="max-w-full h-auto rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          
        </section>
      </div>
    </div>
  )
}

export default Landing;
