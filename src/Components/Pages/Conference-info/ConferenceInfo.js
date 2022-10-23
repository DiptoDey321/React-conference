import React from 'react';
import AppNew from './App/AppNew';

const peoples =[
  {
    id : 1,
    name : "Kim Jong-un",
    companyName : "Missile Dev",
    des : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." ,
    img: "https://i.ibb.co/NsjcQzY/kim.png"
  },
  {
    id : 2,
    name : "Joe Biden",
    companyName : "Uso Aventina",
    des : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." ,
    img :"https://i.ibb.co/nR5by3j/biden.png"
  },
  {
    id : 3,
    name : "vladimir putin",
    companyName : "Russo Salvia",
    des : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." ,
    img: "https://i.ibb.co/9Z95SfW/putn.png"
  },
]

function ConferenceInfo() {

  return (
    <div >
      <div className="mt-[127px] mx-[8%] sm:mx-[15%] ">
          <h3 className='text-[24px] sm:text-headingTwo font-bold'>Conference info</h3>
          <p className='text-base sm:text-xl font-normal text-[#0A142F]/80 mt-5 mb-[72px]'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
          <div className="flex flex-col sm:flex-row gap-x-[3%]">
            <div className="w-full sm:w-[33%]">
              <div className="App">
                <AppNew></AppNew>
              </div>
            </div>
            <div className="w-full sm:w-[67%] flex flex-col gap-y-3 px-4 sm:px-[52px]  py-3 sm:py-[43px] bg-[#FBFBFB] rounded-[10px]">
              {
                peoples.map(people => <People key={people.id} people={people}></People>)
              }
            </div>
          </div>
      </div>
    </div>
  )
}

function People({people}){
  return (
    <div className="">
      <div className="flex items-start sm:items-center gap-x-3 border rounded-md p-2 sm:p-4">
          <img className='w-14 sm:w-[140px]' src={people.img} alt="" srcset="" />
          <div className="">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <span className='text-base sm:text-xl font-bold text-[#0A142F] capitalize'>{people.name}</span>
              <span className='text-xs sm:text-base text-slate-500'>{people.companyName}</span>
            </div>
            <p className='mt-2 sm:mt-5 text-xs sm:text-base'>{people.des}</p>
          </div>
      </div>
    </div>
  )
}

export default ConferenceInfo