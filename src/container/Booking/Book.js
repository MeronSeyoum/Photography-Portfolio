import { useState } from 'react';
import Calendar from 'react-calendar';
import './book.scss';
import 'react-calendar/dist/Calendar.css';

const Book = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app App__Book'>
      <h1 className='text-center'>Select Appointment Date</h1>
      
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
        
      </div>
      <p className='text-center'>
        <br /> <h2>Selected Availabilities:</h2>
        <div>
         
          <h2 className="book__confirm">{date.toDateString()}
          <button>{date.toLocaleTimeString()}</button>
</h2>
                   </div>
       
        
      </p>
    </div>
  );
}

export default Book;