import styled from "styled-components";

export const ServicesContainer = styled.section``;

export const ServicesItem = styled.div`
    margin-top: 10px;
    padding: 20px;
    background-color: ${(props) => props.property};
    display: flex;
    align-items: center;
    column-gap: .7rem;
    border-radius: 5px;
    h3{
        color: var(--primary-color);
        font-size: 1rem;
        font-weight: 600;
    }
    p{
        font-size: .9rem;
        margin-top: 5px;
        color: #222;
    }
`;
export const ItemIcon = styled.i`
    font-size: 2.2rem;
    background-color: var(--primary-color);
    padding: 10px;
    border-radius: 50px;
    color: #fff;
    font-weight: 40;
`;
