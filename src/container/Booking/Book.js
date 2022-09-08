import React from "react";
import DatePicker from "react-datepicker";

import './book.scss' ;
const Modal = ({ setIsOpen }) => {
  return (
    <div className="App__Book">
    <DatePicker wrapperClassName="date-picker"
    controls={['calendar', 'time']}
    touchUi={true}
/>
</div>
  );
};

export default Modal;