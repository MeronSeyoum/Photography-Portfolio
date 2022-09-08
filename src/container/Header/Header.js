import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../Constansts';

import Calendar from 'react-calendar';
import './book.scss';
import 'react-calendar/dist/Calendar.css';

import './Header.scss';

const scalevariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}
const Header = () => {
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    return (
        <div className="app__header app__flex"  >
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className='app__header-badge'>
                    <div className="badge-cmp app__flex">
                        
                        <div style={{ marginLeft: 10 }}>
                            <p className="p-text">Hello, I am </p>
                            <h1 className="head-text">Yared Yacob</h1>
                        </div>
                        <span> 👋 </span>
                    </div>
                   <div className="tag-cmp app__flex">
                        <p className="p-text">
                            Creative Design create culture. Culture shapes value.<br />
                            Value determine the future.
                    {/**        Who is Yared, and what does he do? <br/><b> WHO:</b><br />
                            Grow up in Asmera who is fuelled by love and laughter and all the moments in between.
                            <br /> <b>WHAT:</b><br /> 
                             </p>
                        <p className="p-text">  A photographer with a non negotiable goal to capture the moments that make your heart beat extra fast, make you cry happy tears, and laugh until your stomach hurts.
                            When I pickup my camera, I am not only taking your photo's, I am creating the closest thing to a time machine that is humanly possible, in the form of a photograph.
                        </p>
                        <p className="p-text">  If you're into that kind of stuff, then I think we should be friends?!  */} 
                         </p>
                    
                    <motion.div
                variants={scalevariants}
                whileInView={scalevariants.whileInView}
                className="app__header-circles"
            >
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
                    </div>

                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, delayChildren: 0.5 }}
                className="app__header-img"
            >
               {/** <img src={images.profile} alt="profile_bg" /> 
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                   src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                   
               />*/}

               
               
{/** Modal for booking appointment  */}
<button onClick={toggleModal} className="hero-button">
         Book Now &raquo;
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            
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

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}


       <div className="app__booking">
            <a href= '/'>
        <img src = { images.book }  alt='Yared Yacob'  onClick={() => navigate("/book")}/> 
        </a>
            </div>
            </motion.div>
            
        </div>
    )
}

export default AppWrap(Header, 'home');