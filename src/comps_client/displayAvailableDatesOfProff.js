// import React,{useEffect, useState} from 'react'
// import { useParams } from 'react-router-dom';
// import { API_URL,doApiMethod } from '../services/apiService';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function DisplayAvailableDatesOfProff() {
//     const params = useParams();
//     const [takenDates,settakenDates] = useState([])
//     useEffect(()=>{doApi()},[]);
//     const doApi=async()=>{
//         let url = API_URL + "/proffesionals/single/" + params["id"];
//         try {
//             let resp = await doApiMethod(url,"GET");
//             console.log(resp.data);
//             settakenDates(resp.data.events)
//         }
//         catch (err) {
//             console.log(err.response);
//             alert("There problem try come back later")
//         }
//     }
//     const tileContent = ({ date }) => {
//         const formattedDate = new Date(date).toDateString();
//         const isTaken = takenDates.some((takenDate) =>
//           new Date(takenDate).toDateString() === formattedDate
//         );
//         return isTaken ? <span className="taken-date" /> : null;
//       };
//   return (
//     <div>
//       <h1>Event Calendar</h1>
//       <Calendar
//         value={selectedDate}
//         tileContent={tileContent}
//         onChange={setSelectedDate}
//       />
//     </div>
//   )
// }
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const EventCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const takenDates = [new Date('2023-06-15'), new Date('2023-06-22'), new Date('2023-06-27')];

//   const tileContent = ({ date }) => {
//     const formattedDate = new Date(date).toDateString();
//     const isTaken = takenDates.some((takenDate) =>
//       new Date(takenDate).toDateString() === formattedDate
//     );
//     return isTaken ? <span className="taken-date" /> : null;
//   };

//   return (
//     <div>
//       <h1>Event Calendar</h1>
//       <Calendar
//         value={selectedDate}
//         tileContent={tileContent}
//         onChange={setSelectedDate}
//       />
//     </div>
//   );
// };

// export default EventCalendar;
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const takenDates = [new Date('2023-06-15'), new Date('2023-06-22'), new Date('2023-06-27')];

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      const isTaken = takenDates.some(
        (takenDate) => formattedDate === takenDate.toISOString().split('T')[0]
      );

      return isTaken ? <div className="taken-date-marker" /> : null;
    }
  };

  return (
    <div>
      <h1>Event Calendar</h1>
      <Calendar
        value={selectedDate}
        tileContent={tileContent}
        onChange={setSelectedDate}
      />
    </div>
  );
};

export default EventCalendar;



