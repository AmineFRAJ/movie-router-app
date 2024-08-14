import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//bootstrap
const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //initialization
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  //function add
  const handleAddMovie = () => {
    const id = Math.floor(Math.random() * 10000) + 1;  // generate unique id for each movie.
    let newMovie = {id ,title, description, rate, posterUrl };
    add(newMovie);
    handleClose();
    setTitle("");
    setDescription("");
    setRate("");
    setPosterUrl("");
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{marginTop:"10px"}}>
        Add Movie
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favourite movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
          
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="Number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min="0"
            max="5"
          />
          <Form.Label>PosteUrl</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image url"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
