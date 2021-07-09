import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import { Image,  Button } from "react-bootstrap";
import './ImageModal.css'
import { download } from "./Helper";

const ImageModal = ({image}) => {

  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveImage = () =>{
    download(image)
  }

  return (
    <>
      <Button variant="primary" className="mb-2" onClick={handleShow}>
        Preview Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Image src={image} className="image_modal" fluid />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveImage}>
            Save Image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageModal