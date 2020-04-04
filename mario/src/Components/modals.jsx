import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const PopUpModal = props => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);

  return (
    <div>
      <Button color="danger" onClick={toggle} style={{ margin: "10px" }}>
        Team work and Adaptability.
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Team work and Adaptability.</ModalHeader>
        <ModalBody>
          - I am driven person with a can-do attitude which allows me to perform
          tasks over several hours while remaining my focused.
          <br />- I consider myself as a positive person that always try to look
          at the bright side even in I am in the middle of a "storm".
        </ModalBody>
      </Modal>

      <Button color="danger" onClick={toggle2} style={{ margin: "10px" }}>
        Managing and Work under pressure
      </Button>
      <Modal isOpen={modal2} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>
          Managing and Work under pressure
        </ModalHeader>
        <ModalBody>
          - During my work as a chef, large groups of people were served in 3
          hours.
          <br />
          - I was able to manage a small team so the food would come out quickly
          and with high quality.
          <br />- Meeting tight deadlines have been developed. During lunchtime,
          apart from hundreds of people, takeaway orders were taken too.
        </ModalBody>
      </Modal>
      <Button color="danger" onClick={toggle3} style={{ margin: "10px" }}>
        Resilient with a Can-do attitude
      </Button>
      <Modal isOpen={modal3} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>
          Resilient with a Can-do attitude
        </ModalHeader>
        <ModalBody>
          - In Makers, we were put with different pairs every week as well as in
          the group projects.
          <br />- I believe that teamwork is the most valuable as one can get
          more ideas from it and hear different opinions as well as getting good
          feedback. I am also able to adapt to every person and its needs.
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PopUpModal;
