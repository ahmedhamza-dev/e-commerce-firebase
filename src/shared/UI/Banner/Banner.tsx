import React from 'react'
import { Container } from 'react-bootstrap'
import { BannerSection } from './Banner.style'
import cover from '../../../assets/images/hero-img.png';

type BannerProps = {
    title: string
}
const Banner = ({title}: BannerProps) => {
  return (
    <BannerSection itemProp={cover}>
        <Container>
            <h1>{title}</h1>
        </Container>
    </BannerSection>
  )
}

export default Banner