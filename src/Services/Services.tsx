import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ItemIcon, ServicesContainer, ServicesItem } from "./Services.style";
import {motion} from 'framer-motion'
type ServiceProps = {
  data: ServiceData[];
};
interface ServiceData {
  icon: string;
  title: string;
  subtitle: string;
  bg: string;
}
const Services = ({ data }: ServiceProps) => {
  return (
    <>
      <ServicesContainer>
        <Container>
          <Row>
            {data.map((item, index) => (
              <Col lg="3" md="4" key={index}>
                <motion.div whileHover={{scale: 1.1}}>
                    <ServicesItem property={item.bg}>
                    <span>
                        <ItemIcon className={item.icon} />
                    </span>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                    </ServicesItem>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </ServicesContainer>
    </>
  );
};

export default Services;
