import React from "react";
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import Banner from "../shared/UI/Banner/Banner";
import {
  BillingForm,
  CheckoutCart,
  CheckoutSection,
} from "./Styles/Checkout.style";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Checkout = () => {
  const {totalAmount, totalQuantity} = useSelector((state: any) => state.cart );

  return (
    <Helmet title="Checkout">
      <Banner title="Checkout" />
      <CheckoutSection>
        <Container>
          <Row>
            <Col lg="8" sm="12">
              <h6>Billing Information</h6>
              <BillingForm>
                <FormGroup className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Street address"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postal Code"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </FormGroup>
              </BillingForm>
            </Col>
            <Col lg="4" sm="12">
              <CheckoutCart>
                <h6>
                  Total Qty: <span>{totalQuantity} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                   <span>Shipping: <br /> free shipping</span> <span>$0</span>
                </h6>
                <h4>
                  Total cost: <span>${totalAmount}</span>
                </h4>
              <motion.button
                className="buy_btn auth_btn w-100 mt-3 mb-2"
                whileTap={{ scale: 1.2 }}
              >
                Place an order
              </motion.button>
              </CheckoutCart>
            </Col>
          </Row>
        </Container>
      </CheckoutSection>
    </Helmet>
  );
};

export default Checkout;
