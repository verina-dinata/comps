import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <div>
    <Button primary onClick={handleClose}>I accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Here is an important agreement for you to accept
      </p>
    </Modal>

  return (
    <div>
      <Button primary onClick={handleClick}>Open modal</Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet facilisis orci, at varius diam maximus eget. Mauris vitae elit purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ut turpis ut sem lacinia interdum id eu elit. Phasellus aliquam, lacus et imperdiet molestie, nulla sem elementum ex, condimentum consectetur tortor tellus id augue. In in arcu sit amet diam ullamcorper blandit ac ut diam. Proin vel metus posuere, condimentum lectus sed, feugiat nulla. Nam iaculis velit vitae egestas condimentum. Morbi euismod justo nec dui condimentum, eu facilisis ante lacinia. In dapibus massa nec felis efficitur, sit amet faucibus ante eleifend. Aenean eu purus quis tortor cursus cursus vel in leo. Ut sit amet purus at ante bibendum cursus quis at magna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet facilisis orci, at varius diam maximus eget. Mauris vitae elit purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ut turpis ut sem lacinia interdum id eu elit. Phasellus aliquam, lacus et imperdiet molestie, nulla sem elementum ex, condimentum consectetur tortor tellus id augue. In in arcu sit amet diam ullamcorper blandit ac ut diam. Proin vel metus posuere, condimentum lectus sed, feugiat nulla. Nam iaculis velit vitae egestas condimentum. Morbi euismod justo nec dui condimentum, eu facilisis ante lacinia. In dapibus massa nec felis efficitur, sit amet faucibus ante eleifend. Aenean eu purus quis tortor cursus cursus vel in leo. Ut sit amet purus at ante bibendum cursus quis at magna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet facilisis orci, at varius diam maximus eget. Mauris vitae elit purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ut turpis ut sem lacinia interdum id eu elit. Phasellus aliquam, lacus et imperdiet molestie, nulla sem elementum ex, condimentum consectetur tortor tellus id augue. In in arcu sit amet diam ullamcorper blandit ac ut diam. Proin vel metus posuere, condimentum lectus sed, feugiat nulla. Nam iaculis velit vitae egestas condimentum. Morbi euismod justo nec dui condimentum, eu facilisis ante lacinia. In dapibus massa nec felis efficitur, sit amet faucibus ante eleifend. Aenean eu purus quis tortor cursus cursus vel in leo. Ut sit amet purus at ante bibendum cursus quis at magna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet facilisis orci, at varius diam maximus eget. Mauris vitae elit purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ut turpis ut sem lacinia interdum id eu elit. Phasellus aliquam, lacus et imperdiet molestie, nulla sem elementum ex, condimentum consectetur tortor tellus id augue. In in arcu sit amet diam ullamcorper blandit ac ut diam. Proin vel metus posuere, condimentum lectus sed, feugiat nulla. Nam iaculis velit vitae egestas condimentum. Morbi euismod justo nec dui condimentum, eu facilisis ante lacinia. In dapibus massa nec felis efficitur, sit amet faucibus ante eleifend. Aenean eu purus quis tortor cursus cursus vel in leo. Ut sit amet purus at ante bibendum cursus quis at magna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet facilisis orci, at varius diam maximus eget. Mauris vitae elit purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ut turpis ut sem lacinia interdum id eu elit. Phasellus aliquam, lacus et imperdiet molestie, nulla sem elementum ex, condimentum consectetur tortor tellus id augue. In in arcu sit amet diam ullamcorper blandit ac ut diam. Proin vel metus posuere, condimentum lectus sed, feugiat nulla. Nam iaculis velit vitae egestas condimentum. Morbi euismod justo nec dui condimentum, eu facilisis ante lacinia. In dapibus massa nec felis efficitur, sit amet faucibus ante eleifend. Aenean eu purus quis tortor cursus cursus vel in leo. Ut sit amet purus at ante bibendum cursus quis at magna.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet facilisis orci, at varius diam maximus eget. Mauris vitae elit purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ut turpis ut sem lacinia interdum id eu elit. Phasellus aliquam, lacus et imperdiet molestie, nulla sem elementum ex, condimentum consectetur tortor tellus id augue. In in arcu sit amet diam ullamcorper blandit ac ut diam. Proin vel metus posuere, condimentum lectus sed, feugiat nulla. Nam iaculis velit vitae egestas condimentum. Morbi euismod justo nec dui condimentum, eu facilisis ante lacinia. In dapibus massa nec felis efficitur, sit amet faucibus ante eleifend. Aenean eu purus quis tortor cursus cursus vel in leo. Ut sit amet purus at ante bibendum cursus quis at magna.
      </p>

    </div>
  );
}

export default ModalPage
