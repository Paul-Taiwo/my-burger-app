import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={[classes.Modal, props.show ? classes.ModalShow : classes.ModalHidden].join(' ')}>
      {props.children}
    </div>
  </Aux>
);

export default modal;
