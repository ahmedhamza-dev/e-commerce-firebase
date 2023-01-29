import styled from 'styled-components';

export const ProductItem = styled.div`
    cursor: pointer;
`;
export const ProductImg = styled.div`
    img{
        width: 100%;
    }
`;
export const ProductName = styled.h3`
    font-size: 1.1rem;
    color: var(--primary-color);
    font-weight: 600;
    margin-top: 15px;
`;
export const ProductBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    span i{
        font-size: 1.5rem;
        padding: 5px;
        background-color: var(--primary-color);
        color: #fff;
        border-radius: 50px;
    }
`;
export const ProductInfo = styled.div`
    padding: .5rem;
    span{
        font-size: .9rem;
        display: block;
        text-align: center;
    }
    a:hover{
        color: inherit;
    }
`;
export const Price = styled.p`
    color: var(--primary-color);
    font-size: 1.3rem;
    font-weight: 600;
`;
export const Span = styled.span``
