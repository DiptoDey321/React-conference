import React from 'react'

function Home() {
    const bg = {
        background: `url(https://i.ibb.co/VJBDy0J/nn-1.png) no-repeat center`,
    }
  return (
    <div  style={bg} className='!bg-cover'>
        <div className="mx-[15%] pt-[50px]">
            <div className="flex items-end">
                <div className="left-sec w-[63%]">
                    <div className="font-bold   flex flex-col items-end">
                        <div className="flex items-start relative">
                            <div className="absolute -top-10 -left-14">
                                <svg width="85" height="82" viewBox="0 0 85 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M73.031 42.8773C70.1339 32.4491 66.9478 22.1625 63.6192 11.8683" stroke="#FFC93E" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M53.6392 56.9413C46.6222 46.8978 38.0459 38.1936 30.096 28.9369" stroke="#FFC93E" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M40.4284 76.3598C31.2833 71.7456 21.3856 67.9994 11.2326 66.7087" stroke="#FFC93E" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h4 className='text-headingOne'>React <br /></h4>
                        </div>
                        <h4 className='text-headingOne'>Conference</h4>
                    </div>
                    <div className="flex items-start">
                        <img className='w-full' src={"https://i.ibb.co/wy8Cjy2/Side-image.png"} alt="" />
                        <div className="">
                            <p className='text-xl font-normal leading-[40px]'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</p>
                        </div>
                    </div>
                </div>
                <div className="right-sec w-[37%]">
                    <img className='w-[627px]' src={"https://i.ibb.co/tQ6c5RL/Hero-image.png"} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home