import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
//import { AiFillEye } from 'react-icons/ai';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';



const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Category of <span>Service</span> We<span> Provide </span> and More...</h2>
      <div className='app__about'>
        <div className="app__profile">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
 <a href={about.title} rel="noreferrer">
              <img src={urlFor(about.imgUrl)} alt={about.title} />
</a>
          {/**    <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
               

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                  
                

              </motion.div> */}

              <h2 className="bold-text" style={{ marginTop: 5 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 5 }}>{about.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);