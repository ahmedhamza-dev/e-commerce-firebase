import styled from "styled-components";

export const ProductDetailsContainer = styled.section`
  padding-top: 2rem;
`;
export const ProductDetail = styled.div`
  margin-top: 50px;
  h2 {
    font-size: 1.8rem;
  }
`;
export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  span i {
    color: coral;
  }
  p span {
    color: coral;
    font-weight: 500;
  }
`;
export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 500;
  h6{
    cursor: pointer;
  }
`;
export const TabContent = styled.div`
  margin-top: 2rem !important;
`;
export const ProductReviews = styled.div`

`;

export const ReviewWrapper = styled.div`
    ul li {
        margin-bottom: 1rem;
    }
    ul li span{
        color: coral;
        font-weight: 600;
    }
    ul li p{
        margin-top: 10px;
    }
`;
export const ReviewForm = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 50px;
    h4{
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 30px;

    }
`
export const FormGroup = styled.div`
    margin-top: 20px;
    span{
        display: flex;
        align-items: center;
        column-gap: 5px;
        color: coral;
        font-weight: 600;
        cursor: pointer;
    }
`