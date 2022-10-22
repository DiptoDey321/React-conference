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
      <div className="mt-[127px] mx-[15%] ">
          <h3 className='text-headingTwo font-bold'>Event Schedule</h3>
          <p className='text-xl font-normal text-[#0A142F]/80 mt-5 mb-[72px]'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
          <div className="flex">
            <div className="basis-4/12">
            <div className="App">
              <AppNew></AppNew>
            </div>
            </div>
            <div className="basis-8/12 flex flex-col gap-y-3 px-[52px] py-[43px] bg-[#FBFBFB] rounded-[10px]">
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
      <div className="flex items-center gap-x-3 border rounded-md p-4">
          <img src={people.img} alt="" srcset="" />
          <div className="">
            <div className="flex items-center justify-between">
              <span className='text-xl font-bold text-[#0A142F] capitalize'>{people.name}</span>
              <span className='text-base text-slate-500'>{people.companyName}</span>
            </div>
            <p className=' mt-5'>{people.des}</p>
          </div>
      </div>
    </div>
  )
}

export default ConferenceInfo