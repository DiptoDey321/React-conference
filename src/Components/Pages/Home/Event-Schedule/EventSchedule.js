import React from 'react';
import { Link } from 'react-router-dom';

function EventSchedule() {
  // console.log("form event",handleClick);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ,'Sat']
  const times = ['01:00' , '03:00' , '09:00' , '07:00']
  const conferences = [
    {
      id : 'eventReact01',
      date : '2022-10-23',
      startTime: '09:00',
      endTime : '11:00',
      title : 'Intro to the Conference',
    },
    {
      id : 'eventReact02',
      date : '2022-10-24',
      startTime: '01:00',
      endTime : '03:00',
      title : 'VIP lunch Break',
    },
    {
      id : 'eventReact03',
      date : '2022-10-25',
      startTime: '03:00',
      endTime : '05:00',
      title : 'React press Conference',
    },
    {
      id : 'eventReact04',
      date : '2022-10-26',
      startTime: '07:00',
      endTime : '09:00',
      title : 'Guest dinner break',
    },
    {
      id : 'eventReact05',
      date : '2022-10-27',
      startTime: '07:00',
      endTime : '09:00',
      title : 'After work Party',
    },
    {
      id : 'eventReact06',
      date : '2022-10-28',
      startTime: '09:00',
      endTime : '11:00',
      title : 'End the Conference',
    },
  ]
  // const getDay = (str) =>{
  //   const date = new Date(str);
  //   // console.log(date);
  //   const d =  new Date(date)
  //   let day = d.getDay();
  //   return day;
  // }
  return (
   
    <div className='pb-20'>
        <div className="mt-[177px] mx-[8%] sm:mx-[15%] ">
            <h3 className='text-headingTwo font-bold text-left'>Event Schedule</h3>
            <p className='text-xl font-normal text-[#0A142F]/80 mt-5 mb-[72px] text-left'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
            <div className="w-min-[1200px] overflow-x-auto sm:w-full ">
            <table className="table-auto pb-20">
              <thead >
                <tr>
                <th className='border rounded-[10px] '></th>
                  {
                    days.map( day => 
                    <th className='text-center py-[30px] px-[40px] text-xl font-bold border '>{day}</th> )
                  }
                </tr>
              </thead>
              <tbody>
              
                  {
                    times.map(time =>   <tr className='border'> 
                      <td className='h-[150px] px-[30px] text-xl font-bold m-3 text-center'> {time} </td>
                      {
                          conferences.map(conference => {

                            if(time === conference.startTime){
                              return <td className='text-center py-2 border w-[180px]'>
                                <p className='text-[#0A142F] font-bold text-base mb-4'>{conference.date} </p>
                                <Link to='/conference'>
                                  <div className="border mx-2 p-2 border-[#FCB12A] bg-[#FFFCF6] rounded-[8px] cursor-pointer ">
                                    <p className='text-[#725114] font-bold text-base'>{conference.title}</p>
                                    <p className='text-xs text-[#8B6F3B] mt-2'> {conference.startTime} - {conference.endTime}</p>
                                  </div>
                                </Link>
                                
                                </td>
                            }else{
                              return <td className='border !w-[150px]'></td>
                            }
                          })
                        }  
                      </tr>)
                  }
              </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default EventSchedule