import styled from "styled-components";

export const CartSection = styled.section``;
export const CartTable = styled.table`
  tr td {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    img {
      width: 50px !important;
      height: 50px !important;
      object-fit: contain;
    }
  }
  td {
    color: var(--primary-color);
    span {
      cursor: pointer;
    }
  }
  .ri-delete-bin-line{
    color: red;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
