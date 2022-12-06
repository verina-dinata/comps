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

  return (
    <div>
      <Button primary onClick={handleClick}>Open modal</Button>
      {showModal && <Modal onClose={handleClose}/>}
    </div>
  );
}

export default ModalPage
