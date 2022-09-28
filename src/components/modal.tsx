import React from "react";
import Modal from 'react-modal';

const ModalContent = (link:string, modalIsOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>): JSX.Element => {
  return (
    <div>
      <img src={link} onClick={() => setIsOpen(true)}/>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
        <img src={link}/>
      </Modal>
    </div>
  );
};

export default ModalContent;