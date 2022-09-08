import React from "react";
import DatePicker from "react-datepicker";
const Modal = ({ setIsOpen }) => {
  return (
    
    <DatePicker
    controls={['calendar', 'time']}
    touchUi={true}
/>
 
  );
};

export default Modal;