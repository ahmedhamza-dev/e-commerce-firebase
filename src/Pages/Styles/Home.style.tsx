import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: var(--hero-bg);
`;
export const HeroContent = styled.div`
  padding-top: 45px;
`;
export const HeroSubtitle = styled.p`
  font-weight: 500;
`;
export const H2 = styled.h2`
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: 600;
  margin: 10px 0px;
`;
export const Desc = styled.p`
  color: #111;
`;
export const BuyNow = styled.button`
  border: none;
  outline: none;
  padding: 8px 20px;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin: 40px 0px;
`;
export const HeroImg = styled.div`
  width: 100%;
  img{
    width: 100%;
  }
`;
