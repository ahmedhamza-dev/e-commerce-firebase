import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductsList from "../Product/ProductsList";
import { TrendingSection, TrendingTitle } from "./ProductsCategory.style";

type ProductdCategoryProps = {
    data: any[]
    title: string
}
const ProductdCategory = ({data, title}:ProductdCategoryProps ) => {
  return (
    <TrendingSection>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <TrendingTitle>{title}</TrendingTitle>
          </Col>
          <ProductsList data={data} />
        </Row>
      </Container>
    </TrendingSection>
  );
};

export default ProductdCategory;
