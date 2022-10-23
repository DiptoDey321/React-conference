import React from 'react';

function Home() {

    // let location = useLocation();
    // console.log(location.pathname);
    
  return (
    <div >
        <div className="ml-[10%] mr-[12%] pt-[80px] pb-[40px] relative">
            <div className="flex flex-col sm:flex-row items-end">
                <div className="left-sec w-full sm:w-[63%]">
                    <div className="font-bold flex flex-col items-end">
                        <div className="flex items-start relative">
                            <div className="absolute -top-10 -left-14">
                                <svg width="85" height="82" viewBox="0 0 85 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M73.031 42.8773C70.1339 32.4491 66.9478 22.1625 63.6192 11.8683" stroke="#FFC93E" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokelinejoinn="round"/>
                                <path d="M53.6392 56.9413C46.6222 46.8978 38.0459 38.1936 30.096 28.9369" stroke="#FFC93E" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokelinejoinn="round"/>
                                <path d="M40.4284 76.3598C31.2833 71.7456 21.3856 67.9994 11.2326 66.7087" stroke="#FFC93E" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokelinejoinn="round"/>
                                </svg>
                            </div>
                            <h4 className='text-headingTwo sm:text-headingOne'>React <br /></h4>
                        </div>
                        <h4 className='text-headingTwo sm:text-headingOne'>Conference</h4>
                    </div>
                    <div className="flex items-start">
                        <img className='w-full hidden sm:block' src="https://i.ibb.co/4mxZh38/left-img.png" alt="" />
                        <div className="">
                            <p className='text-base sm:text-xl font-normal leading-[40px] text-left mt-8 sm:mt-0'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</p>

                            <button className='mt-6 w-[293px] h-[60px] bg-primary flex justify-center rounded-[30px]'>
                                <span className='flex items-center gap-x-2'>
                                    <span className='text-lg font-medium'>Buy Tickets</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.5 3.125C17.5 2.95924 17.4341 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5H9.375C9.20924 2.5 9.05026 2.56585 8.93305 2.68306C8.81584 2.80027 8.75 2.95924 8.75 3.125C8.75 3.29076 8.81584 3.44973 8.93305 3.56694C9.05026 3.68415 9.20924 3.75 9.375 3.75H15.3662L2.6825 16.4325C2.62439 16.4906 2.57829 16.5596 2.54684 16.6355C2.51539 16.7114 2.49921 16.7928 2.49921 16.875C2.49921 16.9572 2.51539 17.0386 2.54684 17.1145C2.57829 17.1904 2.62439 17.2594 2.6825 17.3175C2.74061 17.3756 2.80959 17.4217 2.88552 17.4532C2.96144 17.4846 3.04282 17.5008 3.125 17.5008C3.20718 17.5008 3.28855 17.4846 3.36448 17.4532C3.4404 17.4217 3.50939 17.3756 3.5675 17.3175L16.25 4.63375V10.625C16.25 10.7908 16.3158 10.9497 16.4331 11.0669C16.5503 11.1842 16.7092 11.25 16.875 11.25C17.0408 11.25 17.1997 11.1842 17.3169 11.0669C17.4341 10.9497 17.5 10.7908 17.5 10.625V3.125Z" fill="#0A142F"/>
                                    </svg>
                                </span>

                            </button>
                        </div>
                    </div>
                </div>
                <div className="right-sec w-full sm:w-[37%] mt-8 sm:mt-0">
                    <img className='sm:w-[627px] hidden sm:block' src="https://i.ibb.co/tp6RnQ5/Hero-image.png" alt="" />
                    <img className='sm:w-[627px] block sm:hidden' src="https://i.ibb.co/y5wB11s/hero-m.png" alt="" />
                </div>
            </div>

            <div className="sm:hidden">
                <img className='w-[160px]' src="https://i.ibb.co/4mxZh38/left-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home