import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VideoTrailer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Body className='p-0'>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/XiSW80Z2PBU" title="YouTube video" allowfullscreen></iframe>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default VideoTrailer;