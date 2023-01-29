import styled from "styled-components";

export const ShopSection = styled.section`
    select{
        padding: 10px 20px;
        padding-right: 20px;
        border: 1px solid var(--primary-color);
        cursor: pointer;
        border-radius: 5px;
        color: var(--primary-color);
    }
    select:focus{
        outline: none !important;
    }
`;
export const FilterWidget = styled.div``;
export const SearchBox = styled.div`
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding-right: 12px;
    padding-left: 2px;
    input{
        width: 100%;
        border: none;
        outline: none;
        padding: 8px 10px;
        
    }
    span{
        color: var(--primary-color);
    }
`;
