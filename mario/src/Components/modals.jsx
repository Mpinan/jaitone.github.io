import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Container } from "reactstrap";

class PopUpModal extends Component {
  state = {
    modal2: false,
    modal3: false,
    modal4: false
  };

  handleToggle = nr => () => {
    let modalNumber = "modal" + nr;
    console.log(modalNumber);
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={this.handleToggle(2).bind(this)}
          style={{
            margin: 50,
            padding: 25,
            border: 25,
            backgroundColor: "#88A394"
          }}
          className="rounded-0 "
        >
          Team work and Adaptability.
        </Button>

        <Modal
          isOpen={this.state.modal2}
          toggle={this.handleToggle(2).bind(this)}
        >
          <ModalHeader toggle={this.handleToggle(2).bind(this)}>
            Team work and Adaptability.
          </ModalHeader>
          <ModalBody>
            <Container>
              - I am driven person with a can-do attitude which allows me to
              perform tasks over several hours while remaining my focused.
              <br />- I consider myself as a positive person that always try to
              look at the bright side even in I am in the middle of a "storm".
            </Container>
          </ModalBody>
        </Modal>

        <Button
          onClick={this.handleToggle(3).bind(this)}
          style={{
            margin: 50,
            padding: 25,
            border: 25,
            backgroundColor: "#88A394"
          }}
          className="rounded-0"
        >
          Managing and Work under pressure
        </Button>
        <Modal
          isOpen={this.state.modal3}
          toggle={this.handleToggle(3).bind(this)}
        >
          <ModalHeader toggle={this.handleToggle(3).bind(this)}>
            Managing and Work under pressure
          </ModalHeader>
          <ModalBody>
            - During my work as a chef, large groups of people were served in 3
            hours.
            <br />
            - I was able to manage a small team so the food would come out
            quickly and with high quality.
            <br />- Meeting tight deadlines have been developed. During
            lunchtime, apart from hundreds of people, takeaway orders were taken
            too.
          </ModalBody>
        </Modal>
        <Button
          onClick={this.handleToggle(4).bind(this)}
          style={{
            margin: 50,
            padding: 25,
            border: 25,
            backgroundColor: "#88A394"
          }}
          className="rounded-0"
        >
          Resilient with a Can-do attitude
        </Button>
        <Modal
          isOpen={this.state.modal4}
          toggle={this.handleToggle(4).bind(this)}
        >
          <ModalHeader toggle={this.handleToggle(4).bind(this)}>
            Resilient with a Can-do attitude
          </ModalHeader>
          <ModalBody>
            - In Makers, we were put with different pairs every week as well as
            in the group projects.
            <br />- I believe that teamwork is the most valuable as one can get
            more ideas from it and hear different opinions as well as getting
            good feedback. I am also able to adapt to every person and its
            needs.
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default PopUpModal;
