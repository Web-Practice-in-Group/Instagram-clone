import React from "react";
import {
  Overlay,
  ModalContainer,
  Close,
  Row,
  Col,
  ModalText,
  ModalClose,
} from "../../assets/Elements";

import { CloseIcon } from "../Breadcrumbs/Icons";

function Modal({
  children,
  state,
  changeState,
  title,
  showHeader,
  showOverlay,
  positionModal,
}) {
  return (
    <>
      {state && (
        <Overlay showOverlay={showOverlay} positionModal={positionModal}>
          <ModalContainer>
            <Row pl={10} pr={10} pt={10} pb={1} border="#424242">
              <Col></Col>
              <Col>
                <ModalText>{showHeader && <h5>{title}</h5>}</ModalText>
              </Col>
              <Col>
                <ModalClose>
                  <Close onClick={() => changeState(false)}>
                    <CloseIcon color="white" />
                  </Close>
                </ModalClose>
              </Col>
            </Row>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
