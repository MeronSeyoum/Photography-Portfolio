import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Carousel/HomeCarousels.scss";
import "./Works.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
 
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
     setTimeout(() => {
     
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {[
          "Wedding",
          "Family",
          "Engagement",
          "Kids",
          "Maternity",
          "Branding",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      
        <div className="container">
          <Carousel
            autoPlay
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            transitionTime={3000}
            //animationHandler={'fade'}
          >{filterWork.map((work, index) => (
               <div className="App__carousel">
            <img
              src={urlFor(work.imgUrl)}
              alt={work.name}
              className="app__work-img"
            />
            </div>  ))}
          </Carousel>
        </div>
    
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primary");
