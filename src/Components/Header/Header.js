import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EventSchedule from '../Pages/Home/Event-Schedule/EventSchedule';
import Home from '../Pages/Home/Home';

function Header() {

    const [isHome, setHome] = useState(true)
    let location = useLocation();
    // console.log("FROM OUTSIDE" , location.pathname);
    
    useEffect(()=>{
        if(location.pathname !== '/'){
            // console.log(" not in home " );
            setHome(false)
        }else{
            setHome(true);   
            // console.log(" in home " );
        } 
    },[location])

    // console.log("checking the path AFTER " ,isHome);
    const bg = {
        background: `url(https://i.ibb.co/L1WdC0s/background.png) no-repeat`
    }
    const bgNone = {
        background: `none`
    }
  return (
   <div className="">
        <div style={ (isHome === true) ? bg : bgNone } className='!bg-cover'>
            <div className="py-[30px] mx-[8%] sm:mx-[15%] flex justify-between items-center">
                <div className="logo">
                    <Link to='/'>
                        <svg width="108" height="33" viewBox="0 0 108 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.28 32H14.88L14.84 27.04C14.84 25.52 14.3333 24.2533 13.32 23.24C12.3067 22.2267 11.0533 21.72 9.56 21.72H6.16V32H0.76V0.319998H9.6C12.6133 0.319998 15.1467 1.36 17.2 3.44C19.2533 5.49333 20.28 8.02667 20.28 11.04C20.28 14.24 19.08 16.9067 16.68 19.04C19.08 21.1733 20.28 23.84 20.28 27.04V32ZM14.88 11.04C14.9067 9.54666 14.4 8.29333 13.36 7.28C12.3467 6.24 11.0933 5.72 9.6 5.72H6.16V16.32H9.56C11.0533 16.32 12.3067 15.8133 13.32 14.8C14.3333 13.7867 14.8533 12.5333 14.88 11.04ZM44.4256 21.88C44.4256 22.4133 44.3856 22.9467 44.3056 23.48H28.6656C29.0123 24.6 29.6523 25.5067 30.5856 26.2C31.519 26.8667 32.5723 27.2 33.7456 27.2C35.3723 27.2 36.719 26.5733 37.7856 25.32L41.0656 29.68C39.0123 31.6267 36.5723 32.6 33.7456 32.6C30.7323 32.6 28.1856 31.5733 26.1056 29.52C24.0523 27.44 23.0256 24.8933 23.0256 21.88C23.0256 18.8933 24.0656 16.3733 26.1456 14.32C28.2256 12.24 30.759 11.2 33.7456 11.2C36.7323 11.2 39.2523 12.24 41.3056 14.32C43.3856 16.3733 44.4256 18.8933 44.4256 21.88ZM38.3856 19.44C37.399 17.5467 35.8523 16.6 33.7456 16.6C31.6123 16.6 30.0523 17.5467 29.0656 19.44H38.3856ZM73.0044 32H67.2844L66.1244 28.88C63.991 31.3867 61.271 32.64 57.9644 32.64C54.9777 32.64 52.4444 31.6 50.3644 29.52C48.311 27.44 47.2844 24.92 47.2844 21.96C47.2844 19.6933 47.9244 17.6533 49.2044 15.84C50.4844 14 52.191 12.6933 54.3244 11.92C55.5777 11.4667 56.8044 11.24 58.0044 11.24C60.271 11.24 62.311 11.8933 64.1244 13.2C65.9644 14.48 67.271 16.1867 68.0444 18.32L73.0044 32ZM63.2844 21.96C63.2844 20.0933 62.5244 18.64 61.0044 17.6C60.1244 16.9867 59.111 16.68 57.9644 16.68C56.0977 16.68 54.6577 17.4267 53.6444 18.92C53.0044 19.8533 52.6844 20.8667 52.6844 21.96C52.6844 23.8 53.4444 25.24 54.9644 26.28C55.8977 26.92 56.8977 27.24 57.9644 27.24C59.431 27.24 60.6844 26.7333 61.7244 25.72C62.7644 24.68 63.2844 23.4267 63.2844 21.96ZM107.3 32C104.314 32 101.78 30.9733 99.7003 28.92C97.6203 26.84 96.5803 24.3067 96.5803 21.32V0.319998H101.98V11.24H107.3V15.84H101.98V21.32C101.98 22.7867 102.5 24.04 103.54 25.08C104.58 26.0933 105.834 26.6 107.3 26.6V32Z" fill="#0A142F"/>
                            <path d="M93.9191 29.6C91.8391 31.6 89.3724 32.6 86.5191 32.6C83.5057 32.6 80.9591 31.5733 78.8791 29.52C76.8257 27.44 75.7991 24.8933 75.7991 21.88C75.7991 18.8933 76.8391 16.3733 78.9191 14.32C80.9991 12.24 83.5324 11.2 86.5191 11.2C89.2391 11.2 91.6124 12.12 93.6391 13.96L90.3991 18.32C89.3591 17.1733 88.0657 16.6 86.5191 16.6C85.0524 16.6 83.7991 17.12 82.7591 18.16C81.7191 19.1733 81.1991 20.4133 81.1991 21.88C81.1991 23.3467 81.7191 24.6 82.7591 25.64C83.7991 26.68 85.0524 27.2 86.5191 27.2C88.1191 27.2 89.4391 26.5867 90.4791 25.36L93.9191 29.6Z" fill="#FFC93E"/>
                        </svg>
                    </Link>
                </div>
                <div className="menus hidden sm:block">
                    <ul className='flex items-center gap-x-14 w-full whitespace-nowrap font-medium text-lg'>
                        <li><button><Link>About us</Link></button></li>
                        <li><button><Link>What We do</Link></button></li>
                        <li><button><Link>Our work</Link></button></li>
                        <li><button><Link>Blog</Link></button></li>
                        <li><button><Link>Say hi</Link></button></li>
                    </ul>
                </div>
                <div className="">
                    <button>
                        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.55255 13H20.6578M1.55255 1H20.6578H1.55255ZM1.55255 7H20.6578H1.55255Z" stroke="#0A142F" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            {
                
                isHome && 
                <div className="relative">
                <Home></Home>
                <div className="rotate-90 absolute left-1/2 -translate-x-1/2 bottom-40 hidden sm:block">
                    <a href='#eventSchedule' className='flex gap-x-2 items-center'>
                        <span>Scroll Down</span>
                        <span className='rotate-[270deg]'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0314936 0.938778L8.3137 15.284L16.5959 0.938778L15.5705 0.938777L8.3137 13.5079L1.05692 0.938777L0.0314936 0.938778Z" fill="#0A142F"/>
                            <path d="M2.26385 0.938778L8.3137 11.4174L14.3636 0.938777L2.26385 0.938778Z" fill="#0A142F"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            }
        </div>
        {
            isHome && <section id='eventSchedule'>
            <EventSchedule></EventSchedule>
        </section>
        }
   </div>
  )
}

export default Header