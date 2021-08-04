import React, { Component } from "react";
import "../style.css";
import Logo from "../../images/Logo.png";
import Modal from "react-bootstrap/Modal";
import FullWidthTabs from "./FullWidthTabs"

export class ParentModal extends Component {
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <div className>
            <img src={Logo} alt={"logo"} style={{ height: "50px" }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <FullWidthTabs/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ParentModal;