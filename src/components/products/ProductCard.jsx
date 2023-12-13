import React from 'react'
// import {Card} from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Card, Modal, Button} from 'react-bootstrap';  
// import "./Products.scss";


const handleCardClick = (desc) => {
  <div className="App">  
  <Modal.Dialog>  
  <Modal.Header closeButton>  
    <Modal.Title>Title for Modal</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
    <p>Body Content.</p>  
  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="secondary">Close Modal</Button>  
    <Button variant="primary">Save changes</Button>  
  </Modal.Footer>  
</Modal.Dialog>  
    </div>  
  ;}

const ProductCard = ({id, title, price, image, category, desc}) => {
  return (
    <button onClick={() => handleCardClick(desc)}>
    <Card className="rounded-2 m-auto card">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price}</Card.Title>
        <MdFavorite size={30} />
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />

      <Card.Footer className="card__over">
        <Card.Title>
          <p>{title}</p>
        </Card.Title>
      </Card.Footer>
    </Card>
    </button>
  );
}

export default ProductCard;