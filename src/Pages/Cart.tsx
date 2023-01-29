import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import { deleteItem } from "../redux/slices/cartSlice";
import { ProductData } from "../shared/Models.model";
import Banner from "../shared/UI/Banner/Banner";
import { CartSection, CartTable } from "./Styles/Cart.style";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const deletItemFromCart = (id: number) => {
    dispatch(deleteItem(id));
  };

  return (
    <Helmet title="Cart">
      <Banner title="Shopping Cart" />
      <CartSection>
        <Container>
          <Row>
            <Col lg={cartItems.length === 0 ? "12" : "9"} md="9" sm="12">
              {cartItems?.length === 0 ? (
                <div>
                  <h4 className="text-center fs-4">
                    No Item Added To Your Cart!
                  </h4>
                  <div className="d-flex justify-content-center">
                    <motion.button
                      className="buy_btn  mt-3 mb-0"
                      whileTap={{ scale: 1.2 }}
                    >
                      <Link to="/shop">Continue Shopping</Link>
                    </motion.button>
                  </div>
                </div>
              ) : (
                <CartTable className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>QTY</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item: ProductData, index: number) => (
                      <tr key={index}>
                        <td>
                          <img src={item.imgUrl} alt={item.productName} />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <i
                            className="ri-delete-bin-line"
                            onClick={() => deletItemFromCart(+item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </CartTable>
              )}
            </Col>
            {cartItems.length > 0 && (
              <Col lg="3" md="3" sm="12">
                <div>
                  <h6 className="d-flex align-items-center justify-content-between">
                    Subtotals
                    <span className="fs-4 fw-bold">${totalAmount}</span>
                  </h6>
                </div>
                <p className="mt-2 fs-6">
                  taxes and shipping will calculate in checkout
                </p>
                <motion.button
                  className="buy_btn w-100 mt-3 mb-0"
                  whileTap={{ scale: 1.2 }}
                >
                  <Link to="/shop">Continue Shopping</Link>
                </motion.button>
                <motion.button
                  className="buy_btn w-100 mt-3"
                  whileTap={{ scale: 1.2 }}
                >
                  <Link to="/checkout">CHECKOUT</Link>
                </motion.button>
              </Col>
            )}
          </Row>
        </Container>
      </CartSection>
    </Helmet>
  );
};

export default Cart;
