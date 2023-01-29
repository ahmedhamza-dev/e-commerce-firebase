import styled from "styled-components";

export const CheckoutSection = styled.section``;
export const BillingForm = styled.form`
  .form-group .form-control {
    margin-top: 1rem;
    input {
      border: 1px solid var(--card-bg-02);
    }
  }
`;
export const CheckoutCart = styled.div`
    margin-top: 2rem;
    padding: 20px;
    background-color: var(--primary-color);
    color: #fff;
    border-radius: 5px;
    .auth_btn{
        background-color: #fff;
        color: var(--primary-color);
    }
    h6 , h4{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h6{
        margin-bottom: 20px;
    }
    h4{
        border-top: 1px solid rgba(221,221,221,0.253);
        padding-top: 20px;
    }
`