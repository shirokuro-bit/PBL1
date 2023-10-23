import React from "react";
import Modal from 'react-modal';
import styles from '../App.module.css';

type ModalContentType = {
  children: JSX.Element;
  image: string,
  modalIsOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContent = (props: ModalContentType): JSX.Element => {
  return (
    <>
      <img src={props.image} onClick={() => props.setIsOpen(true)}/>
      <Modal isOpen={props.modalIsOpen} onRequestClose={() => props.setIsOpen(false)}>
        <div className={styles.modal}>
          <img src={props.image}/>
          {props.children}
        </div>
      </Modal>
    </>
  );
};

export default ModalContent;