import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  line-height: 70px;
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const TitleWrapper = styled.div``;
export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
`;
export const Description = styled.p``;
export const NvigationContainer = styled.div``;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2.7rem;
  margin-bottom: 0;
`;
export const MenuItem = styled.li`
  a {
    color: var(--primary-color);
    font-weight: 500;
    cursor: pointer;
  }
`;
export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
`;

export const NavIcon = styled.span`
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
  }
  button[type="button"]{
    background-color: transparent !important;
    border: none !important;
    color: var(--primary-color);
    overflow: hidden;
  }
  .dropdown-menu{
    padding: 0;
  }
  .dropdown-item{
    padding: 0px 1rem;
  }
`;

export const NavIconItem = styled.i`
  font-size: 1.4rem;
  color: var(--primary-color);
  cursor: pointer;
`;
export const Badge = styled.span`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 22%;
  right: -5%;
  content: "";
  background: var(--primary-color);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 10;
`;

//  ----- MOBILE -------
export const MobileMenu = styled.div`
  font-size: 1.3rem;
  color: var(--primary-color);
  span{
    margin: 0px 5px;
    i{
        font-size: 1.7rem;
    }
    span{
        top: -50%;
        right: -18%;
    }
  }
`;
export const SideBar = styled.div`
    height: 100%;
    width: 70%;
    position: fixed;
    background-color: var(--primary-color);
    right: 0;
    bottom: 0;
`
export const SideBarTop = styled.ul`
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    padding: 0 1rem;
    .ri-close-line{
        color: white;
        font-size: 2rem;
    }
`
export const SideBarContent = styled.ul`
    display: flex;
    flex-direction: column;
    color: #fff;
`