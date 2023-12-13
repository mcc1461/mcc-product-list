import {products} from "../helpers/data";

import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";

const ProductsList = () => {
  return (
    <>
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">



         {products.map((product) => {const {id, description, title, price, image, category} = product; 
      return (<ProductCard
      
      key={id} desc={description} title={title} price={price} image={image} category={category}></ProductCard>)
      })}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;