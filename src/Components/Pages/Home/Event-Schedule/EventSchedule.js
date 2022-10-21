import React from 'react'

function EventSchedule() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ,'Sat']
  const times = ['01:00' , '03:00' , '09:00' , '07:00']
  const conferences = [
    {
      date : '2022-10-21',
      startTime: '09:00',
      endTime : '11:00',
      title : 'Intro to the Conference',
    },
    {
      date : '2022-10-22',
      startTime: '01:00',
      endTime : '03:00',
      title : 'VIP lunch Break',
    },
    {
      date : '2022-10-23',
      startTime: '03:00',
      endTime : '05:00',
      title : 'React press Conference',
    },
    {
      date : '2022-10-24',
      startTime: '07:00',
      endTime : '09:00',
      title : 'Guest dinner break',
    },
    {
      date : '2022-10-25',
      startTime: '07:00',
      endTime : '09:00',
      title : 'After work Party',
    },
    {
      date : '2022-10-20',
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
   
    <div>
        <div className="mt-[177px] mx-[15%]">
            <h3 className='text-headingTwo font-bold'>Event Schedule</h3>
            <p className='text-xl font-normal text-[#0A142F]/80 mt-5 mb-[72px]'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
            <div className="table w-full">
            <table className="table-fixed w-full">
              <thead >
                <tr>
                <th className='border'></th>
                  {
                    days.map( day => 
                    <th className='text-center py-[30px] text-xl font-bold border'>{day}</th> )
                  }
                </tr>
              </thead>
              <tbody>
              
                  {
                    times.map(time =>   <tr className='border'> 
                      <td className='h-[150px] text-xl font-bold m-3 text-center'> {time} </td>
                      {
                          conferences.map(conference => {

                            if(time === conference.startTime){
                              return <td className=' text-center py-2 border'>
                                <p className='text-[#0A142F] font-bold text-base mb-4'>{conference.date} </p>
                                <div className="border mx-2 py-2 border-[#FCB12A] bg-[#FFFCF6] rounded-[8px]">
                                  <p className='text-[#725114] font-bold text-base'>{conference.title}</p>
                                  <p className='text-xs text-[#8B6F3B] mt-2'> {conference.startTime} - {conference.endTime}</p>

                                </div>
                                
                                </td>
                            }else{
                              return <td className='border'></td>
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