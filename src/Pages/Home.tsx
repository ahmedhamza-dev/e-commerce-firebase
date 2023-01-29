import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import {
  H2,
  HeroContent,
  HeroSection,
  HeroSubtitle,
  Desc,
  HeroImg,
} from "./Styles/Home.style";
import hreoImg from '../assets/images/hero-img.png'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import Services from "../Services/Services";
import data from '../assets/data/serviceData';
import ProductdCategory from "../components/TrendingProducts/ProductsCategory";
import productsData from "../assets/data/products";

const Home = () => {
  const navigate = useNavigate();
  const Year = new Date().getFullYear();
  const NavigateToShop = () => navigate('/shop');
  const [trendingProducts, setProducts] = useState(productsData);
  const [bestSalesProducts, setBestSalesProducts] = useState(productsData);
  const [newArrivals, setNewArrivals] = useState(productsData);

  useEffect(() => {
    const filteredTrendingProducts = productsData.filter(
      (product) => product.category === "chair"
    );
    const filteredbestSalesProducts = productsData.filter(
      (product) => product.category === "sofa"
    );
    const filteredNewArrivals = productsData.filter(
      (product) => product.category === "mobile" || product.category === "wireless"
    );
    setProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredbestSalesProducts);
    setNewArrivals(filteredNewArrivals);
  }, []);

  return (
    <>
      <Helmet title="Home">
        <HeroSection>
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12">
                <HeroContent>
                  <HeroSubtitle>Trending Products in {Year}</HeroSubtitle>
                  <H2>Make Your Interior More Minimalistic & Modern</H2>
                  <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    asperiores maiores beatae quaerat quos ipsum perspiciatis qui.
                    Perferendis amet, hic magni similique nulla eius facilis
                    adipisci, est, praesentium iure debitis.
                  </Desc>
                  <motion.button onClick={NavigateToShop} className="buy_btn" whileTap={{scale: 1.2}}>
                    SHOP NOW
                  </motion.button>
                </HeroContent>
              </Col>
              <Col lg="6" md="6" sm="12" className="overlflow-hidden">
                <HeroImg>
                  <img src={hreoImg} alt="HERO_IMG" />
                </HeroImg>
              </Col>
            </Row>
          </Container>
        </HeroSection>
        <Services data={data} />
        <ProductdCategory data={trendingProducts} title="Trending Products" />
        <ProductdCategory data={bestSalesProducts} title="Best Sales" />
        {/* <TimerCount /> */}
        <ProductdCategory data={newArrivals} title="New Arrivals" />
      </Helmet>
    </>
  );
};

export default Home;
