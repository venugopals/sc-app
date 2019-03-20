import React  from 'react';
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
    debugger;
    let showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
      <div className="">
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal
  