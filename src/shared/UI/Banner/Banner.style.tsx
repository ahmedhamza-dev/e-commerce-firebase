import styled from "styled-components";

export const BannerSection = styled.section`
    background: ${props => `linear-gradient(rgba(0,0,0,0.562), rgba(0,0,0,0.562)), url(${props.itemProp})`} no-repeat center center;
    background-size: contain;
    min-height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0px;
    
    h1{
        color: white;
        font-weight: 600;
        text-align: center;
    }
`;