import React from 'react';

import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../Constansts';
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
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className='app__header-badge'>
                    <div className="badge-cmp app__flex">
                        <span> 👋 </span>
                        <div style={{ marginLeft: 10 }}>
                            <p className="p-text">Hello, I am </p>
                            <h1 className="head-text">Yared Yacob</h1>

                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">
                            Who is Yared, and what does he do? <br/><b> WHO:</b><br />
                            A small town girl who is fuelled by love and laughter and all the moments in between.
                            <br /> <b>WHAT:</b><br /> 
                             </p>
                        <p className="p-text">  A photographer with a non negotiable goal to capture the moments that make your heart beat extra fast, make you cry happy tears, and laugh until your stomach hurts.
                            When I pickup my camera, I am not only taking your photo's, I am creating the closest thing to a time machine that is humanly possible, in the form of a photograph.
                        </p>
                        <p className="p-text">  If you're into that kind of stuff, then I think we should be friends?!  </p>


                    </div>

                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_cirlce"
                    className="overlay_cirlce"
                />
            </motion.div>
            <motion.div
                variants={scalevariants}
                whileInView={scalevariants.whileInView}
                className="app__header-circles"
            >
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className="cirlce-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home');