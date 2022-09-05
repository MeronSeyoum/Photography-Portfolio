import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap} from '../../wrapper';
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
      <a href={about.title} >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            </a>     
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