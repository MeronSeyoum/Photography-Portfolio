import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './gallery.scss';
import { urlFor, client } from '../../client';

const Wedding = () => {

  // Sanity: data retrieve from brand Schema in a form of array
  const [wedding, setWedding] = useState([]);

  useEffect(() => {
    const query = '*[_type == "wedding"]';

    client.fetch(query).then((data) => {
      setWedding(data);
    });
  }, []);

  // Gallery display selected image
  const [model, setModel] = useState(false);
  const [tempimgUrl, setTempImgUrl] = useState('');

  const getImg = (imgUrl) => {
    setTempImgUrl(imgUrl);
    setModel(true);
  }

  return (
    <>
    {/** model display section for selected imaged */}
      <div className={model? "model open" : "model"}>
      <img src={tempimgUrl} alt='' />
      <CloseIcon onclick={() => setModel(true)} />
      </div>

{/**list images will displayed in this section */}
      <div className='app__header'>
      <h4 className='head-text'>Wedding Photo for <span>Traditional</span> and <span>Modern</span></h4>
      </div>
      <div className='app__gallery'>
      
        {wedding.map((wedd, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(urlFor(wedd.imgUrl))}>
            <img src={urlFor(wedd.imgUrl)} style={{ width: '100%' }} alt={wedd.title} />
               </div>
          )
        })}
      </div>
    </>
  )
}

export default Wedding