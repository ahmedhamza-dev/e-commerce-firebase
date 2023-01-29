import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClockTopContent, TimerCountContianer } from "./TimerCount.style";
import counterImg from "../../assets/images/counter-timer-img.png";
import Clock from "../Clock/Clock";
import { BuyNow } from "../../Pages/Styles/Home.style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const TimerCount = () => {
  return (
    <TimerCountContianer>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <ClockTopContent>
              <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
              <h3 className="text-white fs-5 mb-3">QualityArcmchair</h3>
            </ClockTopContent>
            <Clock />
            <motion.span whileTap={{ scale: 1.2 }}>
              <BuyNow>
                <Link to="shop">Visit Store</Link>
              </BuyNow>
            </motion.span>
          </Col>
          <Col lg="6" md="6" className="text-end">
            <img src={counterImg} alt="counter-timer" />
          </Col>
        </Row>
      </Container>
    </TimerCountContianer>
  );
};

export default TimerCount;
