/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import Banner from "../shared/UI/Banner/Banner";
import {
  ProductDetail,
  ProductDetailsContainer,
  ProductRating,
  TabWrapper,
  TabContent,
  ProductReviews,
  ReviewWrapper,
  ReviewForm,
  FormGroup,
} from "./Styles/ProductDetails.style";
import Products from "../assets/data/products";
import { Price } from "../components/Product/Products.style";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItemToCart, sucessAlert } from "../redux/slices/cartSlice";
import { BuyNow } from "./Styles/Home.style";
import ProductdCategory from "../components/TrendingProducts/ProductsCategory";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const reviewUser = useRef<any>();
  const reviewMsg = useRef<any>();

  const product = Products.find((product) => product.id === id);
  const relatedProducts = Products.filter(
    (singleProduct) => singleProduct.category === product?.category
  );

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    sucessAlert("Review Submited!");
  };
  return (
    <div>
      <Helmet title={product?.productName || ""}>
        <Banner title={product?.productName || ""} />

        <ProductDetailsContainer>
          <Container>
            <Row>
              <Col lg="6">
                <img src={product?.imgUrl} alt={product?.productName} />
              </Col>
              <Col lg="6">
                <ProductDetail>
                  <h2>{product?.productName}</h2>
                  <ProductRating className="gap-5">
                    <div>
                      <span>
                        <i className="ri-star-s-fill" />
                      </span>
                      <span>
                        <i className="ri-star-s-fill" />
                      </span>
                      <span>
                        <i className="ri-star-s-fill" />
                      </span>
                      <span>
                        <i className="ri-star-s-fill" />
                      </span>
                      <span>
                        <i className="ri-star-half-s-fill" />
                      </span>
                    </div>
                    <p>
                      (<span>{product?.avgRating}</span>) ratings
                    </p>
                  </ProductRating>
                  <Price>${product?.price}</Price>
                  <p className="mt-3">{product?.shortDesc}</p>
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="buy_btn"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </motion.button>
                </ProductDetail>
              </Col>
            </Row>
          </Container>
        </ProductDetailsContainer>
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <TabWrapper className="gap-5">
                  <h6
                    className={tab === "desc" ? "active_tab" : ""}
                    onClick={() => setTab("desc")}
                  >
                    Description
                  </h6>
                  <h6
                    className={tab === "rev" ? "active_tab" : ""}
                    onClick={() => setTab("rev")}
                  >
                    Reviews ({product?.reviews.length})
                  </h6>
                </TabWrapper>
                <TabContent>
                  {tab === "desc" ? (
                    <p>{product?.description}</p>
                  ) : (
                    <ProductReviews>
                      <ReviewWrapper>
                        <ul>
                          {product?.reviews.map((review, index) => (
                            <li key={index}>
                              <h6>Hamza</h6>
                              <span>{review.rating} (average rating)</span>
                              <p>{review.text}</p>
                            </li>
                          ))}
                        </ul>
                        <ReviewForm>
                          <h4>Leave your experience</h4>
                          <form onSubmit={(e) => submitHandler(e)}>
                            <FormGroup className="form-group">
                              <input
                                ref={reviewUser}
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                required
                              />
                            </FormGroup>
                            <FormGroup className="form-group d-flex gap-4 align-items-center">
                              <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)}>
                                1 <i className="ri-star-s-fill" />
                              </motion.span>
                              <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)}>
                                2 <i className="ri-star-s-fill" />
                              </motion.span>
                              <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)}>
                                3 <i className="ri-star-s-fill" />
                              </motion.span>
                              <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)}>
                                4 <i className="ri-star-s-fill" />
                              </motion.span>
                              <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)}>
                                5 <i className="ri-star-s-fill" />
                              </motion.span>
                            </FormGroup>

                            <FormGroup className="form-group">
                              <textarea
                                ref={reviewMsg}
                                rows={4}
                                placeholder="Review Message"
                                className="form-control"
                                required
                              />
                            </FormGroup>
                            <BuyNow type="submit">Submit</BuyNow>
                          </form>
                        </ReviewForm>
                      </ReviewWrapper>
                    </ProductReviews>
                  )}
                </TabContent>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <ProductdCategory
                  data={relatedProducts}
                  title="Related Products"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default ProductDetails;
